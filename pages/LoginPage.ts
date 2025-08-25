import { Page, expect } from '@playwright/test';
import { config } from '../config/Config';

export class LoginPage {
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
    return this.page.getByRole('button', { name: 'Sign in ' });
  }

  // Actions
  async goto() {
    await this.page.goto(config.AdminYuApp);
  }

  async login(username: string, password: string) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async loginAdminYuApp() {
    await this.login('IlhamQA', 'IlhamQA123');
  }

  async loginFinanceYuApp() {
    await this.login('IlhamFinance', '123');
  }

  async loginMarketingYuApp() {
    await this.login('IlhamMarketing', '123');
  }

  // Verifications
  async verifyLoginPageLoaded() {
    await expect(this.page).toHaveURL(config.AdminYuApp);
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.signInButton).toBeVisible();
  }
}