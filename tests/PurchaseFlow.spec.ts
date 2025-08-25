import { test, expect } from '@playwright/test';
import { CustomerPage } from '../pages/CustomerPage';
import { LoginPage } from '../pages/LoginPage';
import { FinancePage } from '../pages/FinancePage';
import { MarketingPage } from '../pages/MarketingPage';
import { EvaPage } from '../pages/EvaPage';

test.describe('Purchase Flow Approve', () => {
    test('Customer berhasil melakukan pembelian', async ({ page }) => {
        const customerPage = new CustomerPage(page);
        const productName = '1688 ✅ Rok Tenis Tennis Baru-Border';
        const katalogName = '✅ Rok Tenis Tennis Baru-Border';

        // Langkah 1: Navigasi ke halaman customer
        await customerPage.goto();

        // Langkah 2: Login sebagai customer
        await customerPage.login('82223695795', '!Ilham123');
        await page.waitForLoadState('networkidle');

        // Langkah 3: Tambahkan produk ke keranjang
        await customerPage.addProductToCart(productName);

        // Langkah 4: Checkout produk
        await customerPage.checkoutProduct(katalogName);

        // Langkah 5: Buat pesanan
        await customerPage.createOrder();
        await customerPage.verifyOrderCreationSuccess();

        // Langkah 6: Navigasi ke daftar transaksi
        await customerPage.goToTransactionList();
    });

    test('Admin berhasil mengganti harga pengiriman', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const financePage = new FinancePage(page);

        // Langkah 1: Navigasi ke halaman login admin
        await loginPage.goto();
        await loginPage.verifyLoginPageLoaded();

        // Langkah 2: Login sebagai admin
        await loginPage.loginAdminYuApp();
        await page.waitForLoadState('networkidle');

        // Langkah 3: Buka detail transaksi pertama
        await financePage.openFirstTransactionDetails();

        // Langkah 4: Ubah ke penyesuaian harga pengiriman dan update
        await financePage.changeToShippingPriceAdjustment();

        // Langkah 5: Verifikasi pesan sukses
        await financePage.verifyUpdateSuccess();
    });

    test('Marketing berhasil mengubah status order menjadi Menunggu pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const marketingPage = new MarketingPage(page);

        // Langkah 1: Navigasi ke halaman login admin
        await loginPage.goto();
        await loginPage.verifyLoginPageLoaded();

        // Langkah 2: Login sebagai marketing
        await loginPage.loginMarketingYuApp(); // Sesuaikan dengan kredensial marketing
        await page.waitForLoadState('networkidle');

        // Langkah 3: Navigasi ke halaman Order
        await marketingPage.navigateToOrders();

        // Langkah 4: Buka detail order pertama
        await marketingPage.openFirstOrderDetails();
        
        // Langkah 5: Ubah status menjadi 'Menunggu pembayaran'
        await marketingPage.changeStatusToWaitingForPayment();

        // Langkah 6: Verifikasi pesan sukses
        await marketingPage.verifyUpdateSuccess();
    });

    test('Customer berhasil memilih metode pengiriman', async ({ page }) => {
        const customerPage = new CustomerPage(page);
        const customerWhatsapp = '82223695795';
        const customerPassword = '!Ilham123';

        // Langkah 1: Navigasi ke halaman customer
        await customerPage.goto();

        // Langkah 2: Login sebagai customer
        await customerPage.login(customerWhatsapp, customerPassword);
        await page.waitForLoadState('networkidle');

        // Langkah 3: Navigasi ke daftar transaksi
        await customerPage.navigateToTransactionList();

        // Langkah 4: Pilih pengiriman pada transaksi pertama
        await customerPage.selectShippingMethod();

    });

        test('Customer berhasil mengunggah bukti pembayaran', async ({ page }) => {
        const customerPage = new CustomerPage(page);
        const customerWhatsapp = '82223695795';
        const customerPassword = '!Ilham123';
        const paymentProofFile = 'ChatGPT Image Jun 25, 2025, 07_11_59 PM.png'; // Pastikan path file ini benar

        // Langkah 1: Login sebagai customer dan navigasi ke daftar transaksi
        await customerPage.goto();
        await customerPage.login(customerWhatsapp, customerPassword);
      
        await customerPage.navigateToTransactionList();

        // Langkah 2: Unggah bukti pembayaran untuk transaksi pertama
        await customerPage.uploadPaymentProof(paymentProofFile);

        // Langkah 3: Verifikasi bahwa bukti pembayaran berhasil diunggah
        await customerPage.verifyPaymentUploadSuccess();
    });

        test('Finance berhasil menyetujui pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const financePage = new FinancePage(page);

        // Step 1: Navigasi ke halaman login admin
        await loginPage.goto();
        await loginPage.verifyLoginPageLoaded();

        // Step 2: Login sebagai Finance
        await loginPage.loginFinanceYuApp(); // Sesuaikan dengan kredensial Finance
        await page.waitForLoadState('networkidle');

        // Step 3: Buka detail transaksi pertama dan setujui pembayaran
        await financePage.approvePayment();
        await page.waitForLoadState('networkidle');

        // Step 4: Verifikasi pesan sukses
        await financePage.verifyPaymentApprovedSuccessfully();
    });

        test('Admin berhasil menginput nomor lokal China', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const financePage = new FinancePage(page);
        const chinaNumber = '3399';

        // Langkah 1: Login sebagai admin
        await loginPage.goto();
        await loginPage.verifyLoginPageLoaded();
        await loginPage.loginAdminYuApp();
        await page.waitForLoadState('networkidle');

        // Langkah 2: Input nomor lokal China
        await financePage.inputChinaLocalNumber(chinaNumber);
        
        
        // Langkah 3: Verifikasi pesan sukses
        await financePage.verifyUpdateSuccess();
    });

        test('Agen berhasil input new receipt', async ({ page }) => {
        const evaPage = new EvaPage(page);

        // Langkah 1: Login sebagai Agen China
        await evaPage.goto();
        await evaPage.login('IlhamYuAPP', 'IlhamYuAPP');
        await evaPage.verifyLoginSuccess();

        // Langkah 2: Navigasi ke halaman Receipt
        await evaPage.navigateToReceipt();
        await evaPage.createNewReceipt();
        await page.waitForLoadState('networkidle');

        // Langkah 3: Isi form receipt
        const receiptData = {
            chinaLocalNumber: '3399',
            shippingMark: 'VXVXV'
        };
        await evaPage.fillReceiptForm(receiptData);

        // Langkah 4: Tambah barang
        const goodsData = {
            length: '10',
            width: '10',
            height: '10',
            weight: '10',
            totalCtn: '1',
            description: 'Rok tenis lipit lintas batas baru untuk wanita dengan dua rok kebugaran olahraga anti-terpapar palsu'
        };
        await evaPage.addGoods(goodsData);
        await evaPage.verifyGoodsSavedSuccessfully();
        
        // Langkah 5: Submit receipt
        await evaPage.submitReceipt();
        await page.waitForLoadState('networkidle');
        await evaPage.verifyReceiptCreatedSuccessfully();
    });

        test('Agen berhasil update status pengiriman coload menjadi Unstuffing', async ({ page }) => {
        const evaPage = new EvaPage(page);

        // Langkah 1: Login ke EvaTrack
        await evaPage.goto();
        await evaPage.login('IlhamYuAPP', 'IlhamYuAPP');
        await evaPage.verifyLoginSuccess();

        // Langkah 2: Proses pengiriman coload pertama
        await evaPage.processColoadDeliveryToUnstuffing();

        // Langkah 3: Verifikasi bahwa status berhasil diupdate
        await evaPage.verifySuccessMessageVisible();
    });

        test('Agen berhasil mengeluarkan barang dari kontainer ke gudang', async ({ page }) => {
        const evaPage = new EvaPage(page);

        // Langkah 1: Login ke EvaTrack
        await evaPage.goto();
        await evaPage.login('IlhamYuAPP', 'IlhamYuAPP');
        await evaPage.verifyLoginSuccess();

        // Langkah 2: Pindahkan semua item dari kontainer ke gudang
        await evaPage.moveContainerItemsToWarehouse();

        // Langkah 3: Verifikasi proses berhasil
        await evaPage.verifySuccessMessageVisible();
    });

        test('Agen berhasil menyelesaikan shipping dari gudang', async ({ page }) => {
        const evaPage = new EvaPage(page);

        // Langkah 1: Login ke EvaTrack
        await evaPage.goto();
        await evaPage.login('IlhamYuAPP', 'IlhamYuAPP');
        await evaPage.verifyLoginSuccess();

        // Langkah 2: Selesaikan pengiriman untuk item pertama di gudang
        await evaPage.completeLastWarehouseShipping();
        await page.waitForLoadState('networkidle');

        // Langkah 3: Verifikasi proses berhasil
        await evaPage.verifySuccessMessageVisible();
    });

});

