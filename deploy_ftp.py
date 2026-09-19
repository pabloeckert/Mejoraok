#!/usr/bin/env python3
"""
deploy_ftp.py — Despliegue automatizado hacia Hostinger vía FTP.
Sube y actualiza 'index.html' en 'public_html' usando las credenciales de '.env.ftp'.
"""

import os
import sys
from ftplib import FTP, FTP_TLS

def load_env(file_path):
    env = {}
    if not os.path.isfile(file_path):
        raise FileNotFoundError(f"No se encontró el archivo de entorno: {file_path}")
    
    with open(file_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip("'\"")
    return env

def deploy():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    env_path = os.path.join(script_dir, ".env.ftp")
    local_file_path = os.path.join(script_dir, "index.html")

    print("=" * 60)
    print("      DESPLIEGUE AUTOMATIZADO FTP A HOSTINGER (MEJORAOK)      ")
    print("=" * 60)

    # 1. Cargar credenciales
    print(f"[*] Leyendo configuración desde: {env_path}")
    env = load_env(env_path)

    host = env.get("FTP_HOST")
    user = env.get("FTP_USER")
    passwd = env.get("FTP_PASS")
    port = int(env.get("FTP_PORT", 21))
    remote_dir = env.get("FTP_REMOTE_DIR", "public_html")

    if not all([host, user, passwd]):
        raise ValueError("Faltan parámetros obligatorios en .env.ftp (FTP_HOST, FTP_USER, FTP_PASS)")

    # 2. Verificar archivo local
    if not os.path.isfile(local_file_path):
        raise FileNotFoundError(f"No se encontró el archivo local a desplegar: {local_file_path}")
    
    local_size = os.path.getsize(local_file_path)
    print(f"[*] Archivo local preparado: {local_file_path} ({local_size:,} bytes)")

    # 3. Conectar al servidor FTP
    print(f"[*] Conectando a {host}:{port} como usuario '{user}'...")
    ftp = None
    try:
        ftp = FTP()
        ftp.connect(host, port, timeout=20)
        print("[+] Conexión establecida. Iniciando sesión...")
        ftp.login(user, passwd)
        print("[+] Autenticación exitosa.")
    except Exception as e:
        print(f"[!] Falló conexión estándar ({e}). Intentando con FTP_TLS (FTPS)...")
        try:
            ftp = FTP_TLS()
            ftp.connect(host, port, timeout=20)
            ftp.login(user, passwd)
            ftp.prot_p()
            print("[+] Autenticación segura FTP_TLS exitosa.")
        except Exception as e2:
            raise ConnectionError(f"No se pudo autenticar vía FTP ni FTP_TLS: {e2}")

    try:
        # Modo pasivo indispensable para NAT/firewalls
        ftp.set_pasv(True)
        print("[*] Modo pasivo activado.")

        # 4. Navegar a directorio remoto
        print(f"[*] Navegando al directorio remoto: '{remote_dir}'...")
        try:
            ftp.cwd(remote_dir)
            pwd = ftp.pwd()
            print(f"[+] Directorio remoto actual: {pwd}")
        except Exception as e:
            print(f"[!] No se pudo hacer cwd a '{remote_dir}': {e}. Probando en raíz...")

        # 5. Listar archivos remotos
        print("[*] Verificando contenido remoto...")
        remote_files = ftp.nlst()
        if "index.html" in remote_files:
            print("    -> Se detectó 'index.html' previo en el servidor. Se procederá a sobrescribir.")
        else:
            print("    -> 'index.html' no existe aún en el directorio remoto.")

        # 6. Subir archivo
        remote_target = "index.html"
        print(f"[*] Subiendo '{local_file_path}' -> '{remote_target}'...")
        with open(local_file_path, "rb") as fp:
            ftp.storbinary(f"STOR {remote_target}", fp, blocksize=8192)
        print("[+] Subida completada exitosamente.")

        # 7. Verificar tamaño transferido
        try:
            remote_size = ftp.size(remote_target)
            print(f"[*] Verificación de integridad: Tamaño local={local_size} bytes | Tamaño remoto={remote_size} bytes")
            if remote_size == local_size:
                print("[+] Integridad 100% verificada: tamaños coincidentes.")
            else:
                print("[!] Advertencia: diferencia de bytes entre local y remoto.")
        except Exception as size_err:
            print(f"[*] Verificación de tamaño remoto no soportada por el comando SIZE ({size_err}).")

        print("=" * 60)
        print("          DESPLIEGUE A HOSTINGER COMPLETADO CON ÉXITO         ")
        print("=" * 60)

    finally:
        if ftp:
            try:
                ftp.quit()
                print("[*] Conexión FTP cerrada de forma limpia.")
            except Exception:
                pass

if __name__ == "__main__":
    try:
        deploy()
    except Exception as err:
        print(f"\n[ERROR CRÍTICO] {err}", file=sys.stderr)
        sys.exit(1)
