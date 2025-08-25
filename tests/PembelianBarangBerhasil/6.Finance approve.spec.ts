import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamFinance');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('row', { name: '1 ' }).getByRole('button').first().click();
  await page.getByRole('button', { name: ' APPROVE PAYMENT' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Bukti Approved and payment')).toBeVisible();

});