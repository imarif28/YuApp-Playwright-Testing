// pages/SettingKursPage.ts

import { Page, expect } from '@playwright/test';

export class SettingKursPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // -- Locators --
    get settingKursLink() {
        return this.page.getByRole('link', { name: 'Setting Kurs' });
    }

    get rateYuanInput() {
        return this.page.locator('#rate_yuan');
    }

    get saveButton() {
        // Menggunakan selector yang lebih stabil untuk tombol simpan
        return this.page.getByRole('button', { name: '' });
    }

    get successMessage() {
        return this.page.getByText('SuccessSetting Kurs berhasil');
    }

    // -- Actions --
    async updateYuanRate(newRate: string) {
        // 1. Navigasi ke halaman Setting Kurs
        await this.settingKursLink.click();
        
        // 2. Klik input, hapus isi lama, dan isi dengan nilai baru
        // .fill() sudah otomatis menghapus isi field sebelumnya
        await this.rateYuanInput.click();
        await this.rateYuanInput.fill(newRate);
        
        // 3. Simpan perubahan
        await this.saveButton.click();
    }

    // -- Verifications --
    async verifyUpdateSuccess() {
        await expect(this.successMessage).toBeVisible();
    }
}