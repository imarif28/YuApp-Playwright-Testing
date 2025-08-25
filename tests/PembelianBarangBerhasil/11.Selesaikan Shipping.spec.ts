import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eva.noretest.com/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamYuAPP');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamYuAPP');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Tracking ' }).click();
  await page.getByRole('link', { name: ' Warehouse Indonesia' }).click();
  await page.getByRole('combobox', { name: '-- Choose Shipping --' }).click();
  await page.getByRole('treeitem', { name: '(Direct)' }).click();
  await page.getByRole('link', { name: 'Submit ' }).click();
  await page.getByRole('gridcell', { name: 'No: activate to sort column' }).first().click();
  await page.getByRole('row', { name: '335' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Ya, Selesaikan' }).click();
  await expect(page.getByRole('heading', { name: 'Success' }).first()).toBeVisible();
});