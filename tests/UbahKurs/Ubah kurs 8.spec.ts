import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamQA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamQA123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Setting Kurs' }).click();
  await page.locator('#rate_yuan').click();
  await page.locator('#rate_yuan').press('ArrowLeft');
  await page.locator('#rate_yuan').press('ArrowLeft');
  await page.locator('#rate_yuan').press('ArrowLeft');
  await page.locator('#rate_yuan').press('ArrowLeft');
  await page.locator('#rate_yuan').press('ArrowLeft');
  await page.locator('#rate_yuan').press('ArrowLeft');
  await page.locator('#rate_yuan').press('ArrowLeft');
  await page.locator('#rate_yuan').press('ArrowLeft');
  await page.locator('#rate_yuan').fill('8000.00');
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('SuccessSetting Kurs berhasil').click();
  await page.getByTitle('Close').locator('span').click();
});