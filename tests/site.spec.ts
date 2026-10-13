import { test, expect } from '@playwright/test';
test('responsive content, local photos and working destinations', async ({ page }) => {
 await page.goto('/');
 await expect(page.locator('h1')).toHaveCount(1);
 await expect(page.locator('main > section')).toHaveCount(5);
 for (const width of [320,375,430,768,1024,1440,1920]) {
  await page.setViewportSize({ width, height: 900 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 }
 const links = await page.locator('a[href^="https://wa.me/"]').evaluateAll(anchors => anchors.map(anchor => (anchor as HTMLAnchorElement).href));
 expect(links.length).toBeGreaterThan(6);
 for (const link of links) { const url = new URL(link); expect(url.hostname).toBe('wa.me'); expect(url.pathname).toBe('/5583993523501'); expect(url.searchParams.get('text')).toBeTruthy(); }
 await expect(page.locator('a[href="https://www.instagram.com/frutiferasjoaopessoa/"]').first()).toBeVisible();
 await page.locator('#viveiro').scrollIntoViewIfNeeded();
 await page.waitForTimeout(900);
 expect(await page.locator('#viveiro img').evaluateAll(images => images.every(image => (image as HTMLImageElement).naturalWidth > 0))).toBe(true);
 for (const section of await page.locator('main > section').all()) { await section.scrollIntoViewIfNeeded(); await page.waitForTimeout(800); }
 await page.evaluate(() => { (document.activeElement as HTMLElement)?.blur(); window.scrollTo(0,0); });
 await page.waitForTimeout(500);
 await page.screenshot({ path: 'artifacts/desktop.png', fullPage: true });
});
test('mobile menu and lightbox keyboard focus', async ({ page }) => {
 await page.setViewportSize({ width: 375, height: 812 }); await page.goto('/');
 await page.getByRole('button', { name: 'Abrir menu' }).click();
 await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded','true');
 await expect(page.locator('#main-menu a').first()).toBeFocused();
 await page.keyboard.press('Escape'); await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeFocused();
 const image = page.getByRole('button', { name: 'Ampliar fotografia: Laranjas maduras com folhas' }); await image.click();
 await expect(page.getByRole('dialog')).toBeVisible(); await expect(page.getByRole('button', { name: 'Fechar fotografia' })).toBeFocused();
 await page.keyboard.press('ArrowRight'); await expect(page.locator('#lightbox-caption')).toContainText('2/6');
 for (let index=0;index<5;index++) { await page.keyboard.press('Tab'); expect(await page.evaluate(() => document.activeElement?.closest('dialog') !== null)).toBe(true); }
 await page.keyboard.press('Escape'); await expect(page.getByRole('dialog')).toHaveCount(0); await expect(image).toBeFocused();
 for (const section of await page.locator('main > section').all()) { await section.scrollIntoViewIfNeeded(); await page.waitForTimeout(800); }
 await page.evaluate(() => { (document.activeElement as HTMLElement)?.blur(); window.scrollTo(0,0); });
 await page.waitForTimeout(500);
 await page.screenshot({ path: 'artifacts/mobile.png', fullPage: true });
});
test('inquiry prepares WhatsApp message without sending data', async ({ page }) => {
 await page.goto('/');
 await page.evaluate(() => { window.open = ((url?: string | URL) => { document.body.dataset.openedUrl = String(url); return null; }) as typeof window.open; });
 await page.getByLabel('Categoria desejada').selectOption('Mudas enxertadas'); await page.getByLabel('Cidade / UF de destino').fill('Recife / PE'); await page.getByLabel('Quantidade (opcional)').fill('5');
 await page.getByRole('button', { name: 'Solicitar informações' }).click();
 const url = new URL((await page.getAttribute('body','data-opened-url'))!); const message = url.searchParams.get('text');
 expect(message).toContain('Mudas enxertadas'); expect(message).toContain('Recife / PE'); expect(message).toContain('Quantidade aproximada: 5');
});
