import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamQA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamQA123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('row', { name: '1 Transaksi  Ada Order Baru' }).getByRole('button').click();
  await page.getByTitle('Audy').click();
  await page.getByRole('treeitem', { name: 'IlhamMarketing' }).click();
  await page.getByTitle('Penyesuaian harga barang').click();
  await page.getByRole('treeitem', { name: 'Penyesuaian harga pengiriman' }).click();
  await page.getByRole('button', { name: 'Update ' }).click();
  await page.getByText('SuccessOrder berhasil').click();
});