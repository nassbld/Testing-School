import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.psg.fr/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/PSG/);
});

test('Go to Stadium Tour page', async ({ page }) => {
  await page.goto('https://www.psg.fr/');

  await page.getByText('Agree and close').click();

  const buttonLocator = page.locator('.site-section-nav > li > a', { hasText: 'Stadium Tour' });
  await buttonLocator.click();

  await expect(page).toHaveURL('https://stadiumtour.psg.fr/fr/?utm_source=PSG_Site&utm_medium=referral&utm_campaign=Menu_Top_PSG_Stadium_Tour');

});
