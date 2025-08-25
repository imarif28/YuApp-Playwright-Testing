import { Page, expect } from '@playwright/test';
import { config } from '../config/Config';

export class CustomerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    get whatsappInput() {
        return this.page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' });
    }

    get passwordInput() {
        return this.page.getByRole('textbox', { name: 'Masukkan Kata Sandi' });
    }

    get masukButton() {
        return this.page.getByRole('button', { name: 'Masuk' });
    }

    get accountButton() {
        return this.page.getByRole('button', { name: 'ilham Muhammad Arif' });
    }

    get transactionListMenuItem() {
        return this.page.getByRole('menuitem', { name: 'Daftar Transaksi' });
    }

    
    productLinkByName(productName: string) {
        return this.page.getByRole('link', { name: productName });
    }

    get addToCartButton() {
        return this.page.getByRole('button', { name: 'Keranjang' });
    }

    get cartCloseButton() {
        return this.page.getByRole('button', { name: 'close' });
    }

    get cartButtonWithCount() {
        return this.page.getByRole('button', { name: '1', exact: true });
    }

    productKatalogName(productKatalogName: string) {
        return this.page.getByRole('link', { name: productKatalogName });
    }


    get productCheckbox() {
        return this.page.getByRole('checkbox');
    }

    get orderLink() {
        return this.page.getByRole('link', { name: 'Pesan' });
    }

    get createOrderButton() {
        return this.page.getByRole('button', { name: 'Buat Pesanan' });
    }

    get successMessageHeading() {
        return this.page.getByRole('heading', { name: 'Pesanan Anda Berhasil Dibuat!' });
    }

    get transactionListLink() {
        return this.page.getByRole('link', { name: 'Daftar Transaksi' });
    }

    get selectShippingLink() {
        return this.page.getByRole('link', { name: 'Pilih Pengiriman' }).first();
    }
    
    get airShippingRadio() {
        return this.page.getByRole('radio', { name: 'Pengiriman Via Udara Sekitar' });
    }
    
    get checkoutButton() {
        return this.page.getByRole('button', { name: 'Checkout' });
    }

    get payButton() {
        return this.page.locator('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeSmall').first();
    }

    get uploadPaymentButton() {
        return this.page.getByRole('button', { name: 'Unggah Bukti Pembayaran' });
    }
    
    get uploadImageButton() {
        return this.page.getByRole('button', { name: 'Unggah Gambar', exact: true });
    }
    
    get uploadFileButton() {
        return this.page.getByRole('button', { name: 'Unggah atau seret gambar' });
    }

    get uploadConfirmationButton() {
        return this.page.getByRole('button', { name: 'Unggah Gambar' });
    }
    
    get paymentSuccessMessage() {
        return this.page.getByText('Bukti pembayaran berhasil');
    }
    
    // Actions
    async goto() {
        await this.page.goto(config.CustomerYuApp);
    }

    async login(whatsapp: string, password: string) {
        await this.masukButton.click();
        await this.whatsappInput.click();
        await this.whatsappInput.fill(whatsapp);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.masukButton.click();
    }
    
    async addProductToCart(productLinkByName: string) {
        await this.productLinkByName(productLinkByName).click();
        await this.page.waitForLoadState('networkidle');
        await this.addToCartButton.click();
        await this.cartCloseButton.click();
    }

    async checkoutProduct(productKatalogName: string) {
        await this.cartButtonWithCount.click();
        await this.productKatalogName(productKatalogName).click();
         await this.productCheckbox.click();
        await this.orderLink.click();
    }

    async createOrder() {
        await this.createOrderButton.click();
    }

    async goToTransactionList() {
        await this.transactionListLink.click();
    }
    
    async navigateToTransactionList() {
        await this.accountButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.transactionListMenuItem.click();
        await this.page.waitForLoadState('networkidle');
    }
    
    async selectShippingMethod() {
        await this.selectShippingLink.click();
        await this.airShippingRadio.check();
        await this.checkoutButton.click();
    }
    
    async uploadPaymentProof(filePath: string) {
        await this.payButton.click();
        await this.uploadPaymentButton.click();
        await this.uploadImageButton.click();
        await this.uploadFileButton.setInputFiles(filePath);
        await this.uploadConfirmationButton.click();
    }

    // Verifications

    async verifyOrderCreationSuccess() {
        await expect(this.successMessageHeading).toBeVisible();
    }
    
    
    async verifyPaymentUploadSuccess() {
        await expect(this.paymentSuccessMessage).toBeVisible();
    }
}