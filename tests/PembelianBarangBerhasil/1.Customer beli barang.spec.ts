import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp-customer.noretest.com/');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).fill('82223695795');
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).fill('!Ilham123');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByRole('link', { name: '1688 Pasokan eksklusif lintas' }).click();
  await page.getByRole('button', { name: 'Keranjang' }).click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByRole('link', { name: 'Produk Kantong pelatihan' }).click();
  await page.getByRole('checkbox').click();
  await page.getByRole('link', { name: 'Pesan' }).click();
  await page.getByRole('button', { name: 'Buat Pesanan' }).click();
  await page.getByRole('heading', { name: 'Pesanan Anda Berhasil Dibuat!' }).click();
  await page.getByRole('link', { name: 'Daftar Transaksi' }).click();
});