import { test, expect } from '@playwright/test';
import { MainPage } from '../src/PO/MainPage';

test('Test login button', async ({page}) => {
    const mainPage = new MainPage(page);
    await page.goto('https://www.kingbillycasino.com/');
    await mainPage.signIn('regression_currencies@kingbilly.xyz', 'KingBilly123!');
    await page.waitForTimeout(5000);
});