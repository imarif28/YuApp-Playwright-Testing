// tests/UbahKurs.spec.ts

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SettingKursPage } from '../pages/SettingKursPage';

test.describe('Pengaturan Kurs', () => {
    test('Admin berhasil mengubah kurs Yuan', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const settingKursPage = new SettingKursPage(page);
        const newYuanRate = '2500.00';

        // Langkah 1: Login sebagai Admin
        await loginPage.goto();
        await loginPage.loginAdminYuApp();
        await page.waitForLoadState('networkidle');

        // Langkah 2: Update kurs Yuan
        await settingKursPage.updateYuanRate(newYuanRate);

        // Langkah 3: Verifikasi bahwa update berhasil
        await settingKursPage.verifyUpdateSuccess();
    });
});