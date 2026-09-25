# Landing Mejora Continua

*Informe histórico completo: objetivos, plan, resultados y proyecciones*

*Documento de cierre de ciclo · Preparado para Pablo · mejoraok.com · Septiembre 2026*

## Resumen ejecutivo

La landing de Mejora Continua pasó de ser un archivo exportado que no funcionaba fuera del editor a una pieza autónoma, con identidad de marca aplicada, animaciones de entrada y navegación, y dos rutas de conversión activas hacia WhatsApp y el diagnóstico online.

El trabajo se organizó en cuatro fases: **saneamiento técnico**, **capa de movimiento**, **conversión y contacto**, y **ajuste fino y mobile**. Todas están cerradas y verificadas. El proyecto queda en condiciones de publicarse y de empezar a medir.

## 1. Punto de partida

El diseño de la landing ya existía y estaba aprobado en su estructura y su copy. El problema no era de diseño sino de integridad del archivo: la versión exportada dependía del entorno de edición para poder verse. Abierta en un navegador común, se degradaba.

Tres fallas se confirmaron leyendo el código del export, no una captura de pantalla:

- Las tres imágenes apuntaban a identificadores internos del editor en lugar de archivos o datos embebidos. Ninguna cargaba fuera del editor.
- La tipografía Bw Modelica no estaba declarada. El documento caía a la fuente del sistema, perdiendo la identidad de marca.
- Los estados hover se habían escrito con un atributo que los navegadores ignoran. No había interacción visible en ningún botón ni tarjeta.

A eso se sumaba marcado residual del propio empaquetador dentro del archivo, que un entregable autónomo no debe arrastrar.

## 2. Objetivos

Se fijaron cuatro objetivos, en este orden de prioridad:

#### 01 · Autonomía del archivo

Que el HTML se vea igual en cualquier navegador, sin depender del editor ni de internet para sus recursos propios.

#### 02 · Fidelidad de marca

Bw Modelica aplicada en toda la pieza y la paleta institucional respetada sin excepciones.

#### 03 · Percepción de solidez

Movimiento sobrio que acompañe la lectura y comunique cuidado, sin efectismo ni demoras.

#### 04 · Contacto sin fricción

Que todo botón lleve a algún lado y que el camino más corto al contacto sea WhatsApp, con mensaje ya escrito.

## 3. Plan de trabajo

El plan se ejecutó en cuatro fases secuenciales. Cada una se cerró con verificación antes de abrir la siguiente, y en ninguna se tocó lo ya aprobado de la fase anterior.

| Fase | Foco | Criterio de cierre |
| --- | --- | --- |
| I | Saneamiento técnico | Imágenes, tipografía y hover funcionando en navegador real, fuera del editor. |
| II | Capa de movimiento | Entrada del hero, revelado por scroll, escalonado de tarjetas, sombra de header y respuesta al toque. |
| III | Conversión y contacto | Ningún enlace muerto; WhatsApp con mensaje precargado; footer reordenado con iconografía. |
| IV | Ajuste fino y mobile | Nada cortado ni apretado en pantallas chicas; jerarquía visual del bloque de dimensiones resuelta. |

## 4. Resultados por fase

### Fase I · Saneamiento técnico

El export se regeneró desde cero como HTML y CSS estático, sin runtime de por medio. Las tres imágenes quedaron embebidas como datos dentro del propio archivo, de modo que no hay ninguna referencia externa que pueda romperse. La familia Bw Modelica se declaró en tres pesos —regular, medium y bold— y se aplicó al documento completo: bold en títulos, medium en subtítulos y etiquetas, regular en cuerpo. Los hover se reescribieron como reglas reales de CSS, y se eliminó todo el marcado residual del empaquetador.

Resultado verificable: archivo autónomo, identidad tipográfica presente, y estados de interacción visibles en botones, enlaces y tarjetas.

### Fase II · Capa de movimiento

Se sumaron cinco comportamientos, todos resueltos únicamente con opacidad y transformación para no forzar recálculos de maquetado ni penalizar el rendimiento en teléfonos.

- **Entrada del hero.** Título, subtítulo e imagen aparecen con desvanecimiento y un desplazamiento leve hacia arriba. El botón entra al final, con un retraso mínimo, para dar sensación de secuencia.
- **Revelado por scroll.** Cada bloque de la página se revela al entrar en pantalla, una sola vez, sin repetirse si el usuario vuelve a subir.
- **Escalonado de tarjetas.** Dentro de cada grilla, las tarjetas entran en cascada con una diferencia de noventa milisegundos entre una y la siguiente.
- **Sombra del header.** El header fijo gana una sombra suave en cuanto se scrollea, y la pierde al volver arriba.
- **Respuesta al toque.** Los botones se achican levemente al presionarse, con una transición muy corta para que se sienta inmediato.

Dos decisiones técnicas sostienen la calidad de esta capa. El arranque espera a que la tipografía esté cargada, así no hay salto de texto al iniciar. Y el revelado por scroll usa el observador de intersección del navegador, no un detector de scroll manual, con un respaldo que garantiza que ningún bloque quede invisible en entornos donde el observador no dispara.

### Fase III · Conversión y contacto

El botón secundario del cierre estaba enlazado a la nada. Ahora abre WhatsApp con un mensaje ya redactado, que llega con el contexto puesto: la persona dice de dónde viene y qué quiere. El mismo enlace se replicó en el footer, con ícono de WhatsApp acompañando al número.

El footer se reordenó: salió el correo, entraron los íconos de Instagram y Facebook juntos, el dominio quedó como texto y no como enlace, y la línea separadora superior se marcó un poco más para despegar el pie del contenido.

El bloque de las cuatro dimensiones pasó de ser una línea fina con texto gris suelto a una caja con fondo propio, barra de color y las dimensiones destacadas en azul institucional. Dejó de leerse como una nota al pie y empezó a leerse como una definición del método.

Quedan dos rutas de conversión activas: el diagnóstico online, como puerta de entrada de bajo compromiso, y WhatsApp, como camino directo a la conversación.

### Fase IV · Ajuste fino y mobile

El botón del header se cortaba en pantallas angostas. Se agregó un punto de quiebre que reduce el logo, comprime el espaciado del header y permite que el texto del botón se acomode en dos líneas en lugar de recortarse.

La caja de dimensiones recibió su propio ajuste mobile: menos relleno, menos separación superior y cuerpo de texto más contenido, para que no ocupe media pantalla en un teléfono.

Por último, la foto del hero ganó un zoom muy lento y continuo, de ida y vuelta, que le da vida a la imagen sin distraer. Está desactivado para quienes tienen configurada la preferencia de movimiento reducido en su sistema.

## 5. Estado actual y entregables

El proyecto queda con dos piezas, una para trabajar y otra para publicar:

| Pieza | Para qué sirve |
| --- | --- |
| Archivo de trabajo editable | Es la fuente de verdad. Todo cambio futuro arranca acá y después se regenera el archivo publicable. |
| Archivo autónomo para publicar | Un solo HTML con tipografías e imágenes adentro. Se sube a cualquier hosting y funciona sin dependencias. |

Estructura de la página, de arriba hacia abajo: header con acceso al cierre, hero con propuesta y botón de diagnóstico, manifiesto en cuatro principios, cuatro servicios, caja de las cuatro dimensiones, argumento diferencial con tres testimonios, cierre con dos botones, y footer de contacto.

## 6. Proyecciones

La landing está lista para publicarse, pero hoy no mide nada. Esa es la brecha principal entre lo que existe y lo que puede rendir. Las proyecciones se ordenan en tres horizontes.

> **Inmediato · publicar y empezar a contar**
>
> Subir el archivo a un dominio propio, instalar medición básica de visitas y marcar los dos botones de conversión como eventos. Sin eso, cualquier decisión posterior sobre la página es intuición.

> **Corto plazo · cerrar el circuito del contacto**
>
> Respuesta automática en WhatsApp Business para que nadie quede esperando, y un registro simple de cada consulta con su origen. El objetivo es saber cuántas conversaciones genera la página y cuántas terminan en reunión.

> **Mediano plazo · convertir la landing en sistema**
>
> Con tres meses de datos se puede probar variantes del titular, ampliar la prueba social y decidir si la página crece hacia un sitio con secciones propias por servicio.

## 7. Mejoras y ampliación

Doce propuestas, agrupadas por lo que resuelven. Ninguna es obligatoria y ninguna depende de rehacer lo que ya está. Están ordenadas por relación entre esfuerzo y retorno.

### Medir para decidir

#### Eventos de conversión

Marcar cada clic a WhatsApp y al diagnóstico como evento propio, distinguiendo si salió del hero, del cierre o del footer. Sirve para saber qué sección convierte y cuál solo se lee.

#### Profundidad de lectura

Registrar hasta dónde baja la gente. Si la mayoría abandona antes de los testimonios, el problema está arriba y no en el cierre.

#### Origen en el mensaje

Variar levemente el texto precargado de WhatsApp según el botón que lo abrió. Al llegar la consulta, ya se sabe de qué parte de la página vino, sin necesidad de ninguna herramienta.

#### Prueba de titular

Dos versiones del titular del hero, alternadas, midiendo cuál genera más clics. Es la prueba más barata con más impacto potencial.

### Ganar confianza

#### Testimonios con cara

Los tres testimonios actuales funcionan, pero son texto. Una foto real, o un video de treinta segundos, multiplica la credibilidad. Requiere material de los clientes.

#### Sección "cómo trabajamos"

Tres o cuatro pasos que muestren qué pasa después de la primera reunión. Baja la ansiedad de quien no sabe en qué se está metiendo.

#### Preguntas frecuentes

Cuatro o cinco objeciones reales respondidas sin vueltas: cuánto dura, cuánto cuesta, si sirve para una empresa chica, si hay que firmar algo largo.

#### Señales de arraigo

Mencionar la región y los rubros con los que se trabaja. Para una pyme, que el consultor conozca su contexto pesa más que cualquier credencial.

### Ampliar el alcance

#### Una página por servicio

Cada una de las cuatro tarjetas puede crecer a su propia página, con su ejemplo y su cierre. Permite dirigir a cada interesado exactamente a lo que le importa.

#### Página de gracias

Hoy el diagnóstico se abre en otra pestaña y la conversación termina ahí. Una página de retorno permite dejar una siguiente acción y contar la conversión con precisión.

#### Alternativa al WhatsApp

No todo el mundo quiere escribir por WhatsApp desde una computadora. Un formulario de tres campos capta a quien prefiere no dar su teléfono en el primer contacto.

#### Peso y velocidad

Las tipografías y la foto del hero se pueden convertir a formatos más livianos sin pérdida visible. En conexiones móviles de la región, eso se nota.

> **Si hubiera que elegir solo tres**
>
> Publicar con medición de los dos botones. Sumar preguntas frecuentes. Y conseguir una foto o un video de uno de los tres clientes que ya dieron testimonio. Las tres cosas son de bajo costo y atacan lo que hoy falta: no saber qué pasa, no responder objeciones, y pedir confianza sin mostrar caras.

## 8. Criterio de trabajo

Conviene dejar registrado cómo se trabajó, porque explica por qué el resultado se sostiene y cómo conviene seguir.

Primero, nada se dio por resuelto sin verificarlo. Las tres fallas iniciales se confirmaron leyendo el código, no mirando una captura, y cada cierre de fase se comprobó antes de avisar que estaba listo.

Segundo, cada pedido se ejecutó sin ampliarlo. Lo aprobado no se retocó, y las mejoras que aparecieron en el camino se propusieron en lugar de aplicarse por cuenta propia. Este informe es exactamente eso: la lista de lo que se podría hacer, separada de lo que ya se hizo.

Tercero, el archivo publicable no depende de nada del entorno donde se creó. Es una decisión de autonomía: la pieza es tuya y funciona sola.

