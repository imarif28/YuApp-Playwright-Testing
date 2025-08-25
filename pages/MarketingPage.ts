import { Page, expect } from '@playwright/test';
import { config } from '../config/Config';

export class MarketingPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    get orderLink() {
        return this.page.getByRole('link', { name: ' Order' });
    }

    get firstOrderRowButton() {
        // INFO: Selects the button within the first data row ('tr')
        // of the table body ('tbody').
        return this.page.locator('tbody tr').first().getByRole('button');
    }

    get orderStatusDropdown() {
        return this.page.getByTitle('Penyesuaian harga pengiriman');
    }
    
    get waitingForPaymentOption() {
        return this.page.getByRole('treeitem', { name: 'Menunggu pembayaran' });
    }

    get updateButton() {
        return this.page.getByRole('button', { name: 'Update ' });
    }

    get successMessage() {
        return this.page.getByText('Success');
    }

    // Actions
    async gotoLoginPage() {
        await this.page.goto(config.AdminYuApp);
    }
    
    async navigateToOrders() {
        await this.orderLink.click();
    }
    
    async openFirstOrderDetails() {
        await this.firstOrderRowButton.click();
    }
    
    async changeStatusToWaitingForPayment() {
        await this.orderStatusDropdown.click();
        await this.waitingForPaymentOption.click();
        await this.updateButton.click();
    }
    
    // Verifications
    async verifyUpdateSuccess() {
        await expect(this.successMessage).toBeVisible();
    }
}