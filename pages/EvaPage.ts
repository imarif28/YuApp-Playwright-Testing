import { Page, expect } from '@playwright/test';
import { config } from '../config/Config';

export class EvaPage {
    readonly page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    get usernameInput() {
        return this.page.getByRole('textbox', { name: 'Username' });
    }

    get passwordInput() {
        return this.page.getByRole('textbox', { name: 'Password' });
    }

    get signInButton() {
        return this.page.getByRole('button', { name: 'Sign in' });
    }

    get trackingLink() {
        return this.page.getByRole('link', { name: 'Tracking' });
    }

    get receiptLink() {
        return this.page.getByRole('link', { name: ' Receipt' });
    }

    get newReceiptLink() {
        return this.page.getByRole('link', { name: 'NEW RECEIPT' });
    }

    get chinaLocalNumberInput() {
        return this.page.getByRole('textbox', { name: 'China Local Express' });
    }

    get shippingMarkInput() {
        return this.page.getByRole('textbox', { name: 'Shipping mark' });
    }
    
    get coloadDropdown() {
        return this.page.getByRole('combobox', { name: '-- Choose Coload --' });
    }

    get yuappColoadOption() {
        return this.page.getByRole('treeitem', { name: 'Yuapp' });
    }

    get shippingTypeRadio() {
        return this.page.getByRole('radio', { name: 'Udara' });
    }

    get addNewGoodsButton() {
        return this.page.getByRole('button', { name: 'ADD NEW GOODS' });
    }

    get lengthInput() {
        return this.page.locator('#panjang');
    }
    
    get widthInput() {
        return this.page.locator('#lebar');
    }

    get heightInput() {
        return this.page.locator('#tinggi');
    }

    get weightInput() {
        return this.page.locator('#berat');
    }

    get totalCtnInput() {
        return this.page.locator('#total_ctn');
    }
    
    get goodsDescriptionInput() {
        return this.page.getByRole('textbox', { name: 'Deskripsi barang' });
    }

    get expeditionDropdown() {
        return this.page.getByRole('combobox', { name: '-- Pilih Ekspedisi --' });
    }
    
    get airExpeditionOption() {
        return this.page.getByRole('treeitem', { name: 'UDARA - ALL CATEGORIES' });
    }

    get submitGoodsButton() {
        return this.page.getByRole('button', { name: 'Submit', exact: true });
    }

    get submitReceiptButton() {
        return this.page.getByRole('button', { name: 'Submit' }).first();
    }

    get successGoodsMessage() {
        return this.page.getByText('SuccessGoods berhasil disimpan');
    }
    
    get successReceiptMessage() {
        return this.page.getByText('SuccessReceipt Created!').first();
    }

    get deliveriesByColoadLink() {
        return this.page.getByRole('link', { name: 'Deliveries By Coload (Air)' });
    }

    get firstDeliveryRow() {
        // Memilih baris pertama di tabel pengiriman
        return this.page.locator('td').first();
    }

    get updateStatusToUnstuffingButton() {
        return this.page.getByRole('button', { name: 'Status update : Unstuffing' });
    }

    get successHeading() {
        return this.page.getByRole('heading', { name: 'Success' }).first();
    }

    get unstuffingIndonesiaLink() {
        return this.page.getByRole('link', { name: 'Unstuffing Indonesia' });
    }

    get unstuffingCartonLink() {
        return this.page.getByRole('link', { name: 'UNSTUFFING CARTON' });
    }

    get destinationPortDropdown() {
        return this.page.getByRole('combobox', { name: '--Destination Port--' });
    }

    get directPortOption() {
        return this.page.getByRole('treeitem', { name: '(Direct)' });
    }

    get containerNumberDropdown() {
        return this.page.getByRole('combobox', { name: '--No. Container--' });
    }

    get coloadContainerOption() {
        return this.page.getByRole('treeitem', { name: 'COLOAD' });
    }

    get unstuffingSubmitButton() {
        return this.page.getByRole('button', { name: 'Submit' });
    }

    get moveAllToWarehouseButton() {
        return this.page.getByRole('button', { name: 'Move All To Warehouse' });
    }

    get confirmMoveAllButton() {
        return this.page.getByRole('button', { name: 'Pindah Semua' });
    }

    get warehouseIndonesiaLink() {
        return this.page.getByRole('link', { name: 'Warehouse Indonesia' });
    }

    get shippingDropdown() {
        return this.page.getByRole('combobox', { name: '-- Choose Shipping --' });
    }

    get directShippingOption() {
        return this.page.getByRole('treeitem', { name: '(Direct)' });
    }

    get warehouseSubmitLink() {
        return this.page.getByRole('link', { name: 'Submit' });
    }

    get sortlastNumber() {
        return this.page
    }

    get sortNumberColumnHeader() {
        return this.page.getByRole('gridcell', { name: 'No: activate to sort column' }).first();
    }

    get lastWarehouseItemCompleteButton() {
        // INFO: Menggunakan .last() untuk memilih baris terakhir di tabel.
        return this.page.locator('tbody tr').first().getByRole('button').nth(1);
    }

    get confirmCompleteShippingButton() {
        return this.page.getByRole('button', { name: 'Ya, Selesaikan' });
    }


    // Actions
    async goto() {
        await this.page.goto(config.AdminEvatrack);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
        async navigateToReceipt() {
        await this.trackingLink.click();
        await this.page.waitForLoadState('networkidle');
        await this.receiptLink.click();
    }

    async createNewReceipt() {
        await this.newReceiptLink.click();
    }

    async fillReceiptForm(data: { chinaLocalNumber: string; shippingMark: string }) {
        await this.chinaLocalNumberInput.fill(data.chinaLocalNumber);
        await this.shippingMarkInput.fill(data.shippingMark);
        await this.coloadDropdown.click();
        await this.yuappColoadOption.click();
        await expect(this.page.getByRole('combobox', { name: 'Marketing YUAPP', exact: true })).toBeVisible();
        await this.shippingTypeRadio.check();
    }

    async addGoods(data: {
        length: string;
        width: string;
        height: string;
        weight: string;
        totalCtn: string;
        description: string;
    }) {
        await this.addNewGoodsButton.click();

        // 💡 Mengisi input satu per satu seperti manusia
        await this.lengthInput.pressSequentially(data.length, { delay: 50 });
        await this.widthInput.pressSequentially(data.width, { delay: 50 });
        await this.heightInput.pressSequentially(data.height, { delay: 50 });
        await this.weightInput.pressSequentially(data.weight, { delay: 50 });
        await this.totalCtnInput.pressSequentially(data.totalCtn, { delay: 50 });
        await this.goodsDescriptionInput.pressSequentially(data.description, { delay: 50 });
        
        await this.expeditionDropdown.click();
        await this.airExpeditionOption.click();

        // ✅ Tambahkan baris ini untuk menunggu tombol menjadi aktif
        await expect(this.submitGoodsButton).toBeEnabled({ timeout: 5000 }); // Tunggu hingga 5 detik

        // Sekarang tombol dijamin sudah aktif sebelum diklik
        await this.submitGoodsButton.click();
    }

    async submitReceipt() {
        await this.submitReceiptButton.click();
    }

    async processColoadDeliveryToUnstuffing() {
        // Navigasi dari menu utama ke daftar pengiriman coload
        await this.trackingLink.click();
        await this.page.waitForLoadState('networkidle');
        await this.deliveriesByColoadLink.click();
        await this.page.waitForLoadState('networkidle');
        
        // Memilih dan update status pengiriman pertama
        await this.firstDeliveryRow.click();
        await this.updateStatusToUnstuffingButton.click();
    }

    async moveContainerItemsToWarehouse() {
        // Navigasi ke menu unstuffing
        await this.trackingLink.click();
        await this.page.waitForLoadState('networkidle');
        await this.unstuffingIndonesiaLink.click();
        await this.unstuffingCartonLink.click();

        // Filter berdasarkan port dan kontainer
        await this.destinationPortDropdown.click();
        await this.directPortOption.click();
        await this.page.waitForLoadState('networkidle');
        await this.containerNumberDropdown.click();
        await this.coloadContainerOption.click();
        await this.unstuffingSubmitButton.click();

        // Pindahkan semua barang ke gudang
        await this.moveAllToWarehouseButton.click();
        await this.confirmMoveAllButton.click();
    }

    async completeLastWarehouseShipping() {
        // Navigasi ke gudang Indonesia
        await this.trackingLink.click();
        await this.warehouseIndonesiaLink.click();
        
        // Filter data pengiriman
        await this.shippingDropdown.click();
        await this.directShippingOption.click();
        await this.warehouseSubmitLink.click();
        await this.page.waitForLoadState('networkidle');

        // Selesaikan pengiriman untuk item TERAKHIR
        await this.sortNumberColumnHeader.click();
        await this.page.waitForLoadState('networkidle');
        await this.lastWarehouseItemCompleteButton.click();
        await this.confirmCompleteShippingButton.click();
    }

  
    // Verifications
    async verifyLoginSuccess() {
        await expect(this.page).not.toHaveURL(config.AdminEvatrack);
        // Atau verifikasi keberadaan elemen di halaman dashboard
        await expect(this.page.getByRole('link', { name: ' Dashboard' })).toBeVisible();
    }

    async verifyGoodsSavedSuccessfully() {
        await expect(this.successGoodsMessage).toBeVisible();
    }


    async verifyReceiptCreatedSuccessfully() {
        await expect(this.successReceiptMessage).toBeVisible();
    }

    async verifySuccessMessageVisible() {
        await expect(this.successHeading).toBeVisible();
    }
}