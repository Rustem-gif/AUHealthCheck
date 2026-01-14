import { test, expect } from '@playwright/test';
import { MainPage } from '../src/PO/MainPage';

test('Test login button', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navTo('https://www.kingbillycasino18.com/');
    await mainPage.signIn('regression_new_citizen@kingbilly.xyz', 'KingBilly123!');
    await page.waitForTimeout(5000);
    await expect(mainPage.depositButton).toBeVisible;
    
});