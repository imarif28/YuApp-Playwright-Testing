import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamQA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamQA123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('row', { name: '1 Transaksi  Payment Manual' }).getByRole('button').click();
  await page.locator('#no_local_china').click();
  await page.locator('#no_local_china').fill('300302');
  await page.getByRole('button', { name: 'Update ' }).click();
  await expect(page.getByText('SuccessOrder berhasil').first()).toBeVisible();
});