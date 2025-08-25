import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp-customer.noretest.com/');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).fill('82223695795');
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).fill('!Ilham123');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByRole('button', { name: 'ilham Muhammad Arif' }).click();
  await page.getByRole('menuitem', { name: 'Daftar Transaksi' }).click();
  await page.locator('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeSmall').first().click();
  await page.getByRole('button', { name: 'Unggah Bukti Pembayaran' }).click();
  await page.getByRole('button', { name: 'Unggah Gambar', exact: true }).click();
  await page.getByRole('button', { name: 'Unggah atau seret gambar' }).setInputFiles('ChatGPT Image Jun 25, 2025, 07_11_59 PM.png');
  await page.getByRole('button', { name: 'Unggah Gambar' }).click();
  await page.getByText('Bukti pembayaran berhasil').click();
});