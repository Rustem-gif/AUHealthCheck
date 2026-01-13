import BasePage from "../BasePage/BasePage";
import {Locator, Page} from "@playwright/test";
import {IGameCategories} from "../../Interfaces/gameCategories";
import SidebarMenu from "../../Components/SidebarMenu";
import {DepModal} from "../../Components/DepModal";
import SupportMessanger from "../../Components/SupportButton";
import PromoSection from "./Component/PromoSection";
import { axeScan } from "axe-playwright-report";

export class MainPage {

    readonly page: Page;
    readonly loginButton: Locator;
    readonly inputMailField: Locator;
    readonly inputPasswordField: Locator;
    readonly submitLoginButton: Locator;
    
    constructor(page: Page) {

        this.page = page;    
        this.loginButton = page.locator('#header_log_in_btn');
        this.inputMailField = page.locator('#login_modal_email_input');
        this.inputPasswordField = page.locator('#login_password_input');
        this.submitLoginButton = page.locator('#submit_login');
        }

    async signIn(email, password) {
        await this.loginButton.click();
        await this.inputMailField.fill(email);
        await this.inputPasswordField.fill(password);
        await this.submitLoginButton.click();
    }
}


