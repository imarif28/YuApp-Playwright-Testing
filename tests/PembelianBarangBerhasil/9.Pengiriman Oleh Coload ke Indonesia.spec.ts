import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eva.noretest.com/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamYuAPP');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamYuAPP');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Tracking ' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('link', { name: ' Deliveries By Coload (Air)' })).toBeVisible();
  await page.getByRole('link', { name: ' Deliveries By Coload (Air)' }).click();
  await expect(page.getByRole('gridcell', { name: '1', exact: true }).first()).toBeVisible(); 
  await page.locator('td').first().click();
  await page.getByRole('button', { name: ' Status update : Unstuffing' }).click();
  await expect(page.getByRole('heading', { name: 'Success' }).first()).toBeVisible();
});