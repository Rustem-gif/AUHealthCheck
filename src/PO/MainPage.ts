
import {Locator, Page, expect} from "@playwright/test";

export class MainPage {

    readonly page: Page;
    readonly loginButton: Locator;
    readonly inputMailField: Locator;
    readonly inputPasswordField: Locator;
    readonly submitLoginButton: Locator;
    readonly depositButton: Locator;    
    
    constructor(page: Page) {

        this.page = page;    
        this.loginButton = page.locator('#header_log_in_btn');
        this.inputMailField = page.locator('#login_modal_email_input');
        this.inputPasswordField = page.locator('#login_password_input');
        this.submitLoginButton = page.locator('#submit_login');
        this.depositButton = page.locator('#header_dep_btn')
        }

    async signIn(email, password) {
        await this.loginButton.click();
        await this.inputMailField.fill(email);
        await this.inputPasswordField.fill(password);
        await this.submitLoginButton.click();
    }

    async navTo(url: string) {
         await this.page.goto(url);
         await expect (this.page.url()).toContain(url);
        }
}


