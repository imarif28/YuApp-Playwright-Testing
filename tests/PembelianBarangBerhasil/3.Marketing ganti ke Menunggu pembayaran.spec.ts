import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamMarketing');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Order' }).click();
  await page.getByRole('row', { name: '1 New Order - Barang belum' }).getByRole('button').click();
  await page.getByTitle('Penyesuaian harga pengiriman').click();
  await page.getByRole('treeitem', { name: 'Menunggu pembayaran' }).click();
  await page.getByRole('button', { name: 'Update ' }).click();
});