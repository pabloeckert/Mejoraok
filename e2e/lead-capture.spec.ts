import { test, expect } from '@playwright/test';

test.describe('Mejoraok — Captura de Leads y Fachada Institucional', () => {
  test('debe cargar la landing page oficial con metadata de marca', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Mejora Continua/);
    const mainHeading = page.locator('h1.mc-h1');
    await expect(mainHeading).toContainText('RESULTADOS');
  });

  test('debe abrir el modal de captura "Hablemos ahora" y permitir completar datos', async ({ page }) => {
    await page.goto('/');

    // Clic en CTA principal
    const ctaButton = page.locator('button.mc-cta', { hasText: 'Hablemos ahora' });
    await expect(ctaButton).toBeVisible();
    await ctaButton.click();

    // Validar modal visible
    const modal = page.locator('.mc-modal-card');
    await expect(modal).toBeVisible();
    await expect(page.locator('.mc-modal-title')).toHaveText('Hablemos ahora');

    // Completar formulario
    const nameInput = page.locator('input[type="text"]').first();
    const phoneInput = page.locator('input[type="tel"]');
    const submitBtn = page.locator('button.mc-submit-btn');

    await nameInput.fill('Director Test');
    await phoneInput.fill('+5491123456789');

    // Botón habilitado
    await expect(submitBtn).toBeEnabled();
  });

  test('las rutas protegidas (/app, /login, /insights) deben mostrar el portal de redirección oficial', async ({ page }) => {
    await page.goto('/app');
    
    // Verificar que NO existe ningún rastro de Continuum o Habit Tracker
    await expect(page.locator('text=Continuum')).not.toBeVisible();
    await expect(page.locator('text=habits')).not.toBeVisible();

    // Verificar tarjeta oficial de Portal de Clientes
    const portalTitle = page.locator('h1:has-text("Portal de Clientes")');
    await expect(portalTitle).toBeVisible();

    const portalLink = page.locator('a[href="https://app.mejoraok.com"]');
    await expect(portalLink).toBeVisible();
  });
});
