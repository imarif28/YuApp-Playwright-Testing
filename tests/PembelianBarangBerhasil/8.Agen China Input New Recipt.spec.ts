import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eva.noretest.com/');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamYuAPP');
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamYuAPP');
  await page.getByRole('button', { name: 'Sign in ' }).click();

  // Navigasi ke Receipt
  await page.getByRole('link', { name: ' Tracking ' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('link', { name: ' Receipt' })).toBeVisible();
  await page.getByRole('link', { name: ' Receipt' }).click();
  await page.getByRole('link', { name: 'NEW RECEIPT ' }).click();

  // Isi form receipt
  await page.getByRole('textbox', { name: 'China Local Express' }).fill('300302');
  await page.getByRole('textbox', { name: 'Shipping mark' }).fill('KKO8');
  await page.getByRole('combobox', { name: '-- Choose Coload --' }).click();
  await page.getByRole('treeitem', { name: 'Yuapp' }).click();
  await expect(page.getByRole('combobox', { name: 'Marketing YUAPP', exact: true })).toBeVisible();  
  await page.getByRole('radio', { name: 'Udara' }).check();

  // Tambah barang
  await page.getByRole('button', { name: 'ADD NEW GOODS ' }).click();

  await page.locator('#panjang').fill('10');
  await page.locator('#panjang').press('Tab');
  await page.locator('#lebar').fill('10');
  await page.locator('#lebar').press('Tab');
  await page.locator('#tinggi').fill('10');
  await page.locator('#tinggi').press('Tab');
  await page.locator('#berat').fill('10');
  await page.locator('#berat').press('Tab');
  await page.locator('#total_ctn').fill('1');
  await page.locator('#total_ctn').press('Tab');

  await page.getByRole('textbox', { name: 'Deskripsi barang' }).fill(
    'Kantong pelatihan olahraga lintas-batas Tas Silindris Kantong Renang Pemisahan Kering dan Basah Logo Kustom Kustom Tas Nylon Tanah Nylon'
  );
  await page.getByRole('textbox', { name: 'Deskripsi barang' }).press('Tab');

  await page.getByRole('combobox', { name: '-- Pilih Ekspedisi --' }).click();
  await page.getByRole('treeitem', { name: 'UDARA - ALL CATEGORIES' }).click();

  // Tunggu tombol Submit aktif lalu klik
  await page.getByRole('button', { name: 'Submit', exact: true }).click();

  // Verifikasi barang berhasil disimpan
  await expect(page.getByText('SuccessGoods berhasil disimpan')).toBeVisible();

  // Submit receipt
  await page.getByRole('button', { name: 'Submit ' }).click();
  await expect(page.getByText('SuccessReceipt Created!').first()).toBeVisible();
});
