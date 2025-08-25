import { Page, expect } from '@playwright/test';

import { config } from '../config/Config';



export class FinancePage {

    readonly page: Page;



    constructor(page: Page) {

        this.page = page;

    }



    // Locators

    get firstTransactionDetailsButton() {

        return this.page.locator('tbody tr').first().getByRole('button').first();
    }


    get adminRoleDropdown() {

        return this.page.getByTitle('Audy');

    }



    get ilhamMarketingOption() {

        return this.page.getByRole('treeitem', { name: 'IlhamMarketing' });

    }


    get priceAdjustmentDropdown() {

        return this.page.getByTitle('Penyesuaian harga barang');

    }



    get shippingPriceAdjustmentOption() {

        return this.page.getByRole('treeitem', { name: 'Penyesuaian harga pengiriman' });

    }



    get updateButton() {

        return this.page.getByRole('button', { name: 'Update ' });

    }


    get successUpdateMessage() {

        return this.page.getByText('SuccessOrder berhasil').first();

    }


    get approvePaymentButton() {

        return this.page.getByRole('button', { name: 'APPROVE PAYMENT' });

    }



    get submitButton() {

        return this.page.getByRole('button', { name: 'Submit' });

    }


    get paymentApprovedMessage() {

        return this.page.getByText('Bukti Approved and payment');

    }


    get chinaLocalNumberInput() {
        return this.page.locator('#no_local_china');
    }





    // Actions

    async gotoLoginPage() {

        await this.page.goto(config.AdminYuApp);

    }


    async openFirstTransactionDetails() {

        await this.firstTransactionDetailsButton.click();

    }


    async changeToShippingPriceAdjustment() {

        await this.adminRoleDropdown.click();

        await this.ilhamMarketingOption.click();

        await this.priceAdjustmentDropdown.click();

        await this.shippingPriceAdjustmentOption.click();

        await this.updateButton.click();

    }


    async approvePayment() {

        await this.openFirstTransactionDetails();

        await this.approvePaymentButton.click();

        await this.submitButton.click();

    }

    async inputChinaLocalNumber(number: string) {

        await this.openFirstTransactionDetails();

        await this.chinaLocalNumberInput.click();

        await this.chinaLocalNumberInput.fill(number);

        await this.updateButton.click();


    }


    // Verifications

    async verifyUpdateSuccess() {

        await expect(this.successUpdateMessage).toBeVisible();

    }


    async verifyPaymentApprovedSuccessfully() {

        await expect(this.paymentApprovedMessage).toBeVisible();

    }

}