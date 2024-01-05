import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";
const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));




export class EtsyHome extends BasePage {
    private signIn = By.xpath('//*[@id="gnav-header-inner"]//div[@class="wt-flex-shrink-xs-0"]//nav//ul//li//button');
    private register = By.xpath('/html/body/div[6]/div[2]/div/div[4]/div/div/div/div/div/div[2]/form/div[1]/div/div[1]/div/button');
    private emailField = By.id('join_neu_email_field');
    private nameField = By.id('join_neu_first_name_field');
    private password = By.id('join_neu_password_field');
    private submit = By.xpath('/html/body/div[6]/div[2]/div/div[4]/div/div/div/div/div/div[2]/form/div[1]/div/div[7]/div/button');
    
    constructor(driver: WebDriver) {
        super(driver);
    }

    async clickSignIn(){
        await this.findAndClick(this.signIn);
    }

    async clickRegister() {
        await this.waitForElement(this.register, 2000);
        await this.findAndClick(this.register);
    }

    async enterEmail(){
        await this.fillInputField(this.emailField, testData.user.email);
    }

    async enterName(){
        await this.fillInputField(this.nameField, testData.user.username);
    }

    async enterPassword(){
        await this.fillInputField(this.password, testData.user.password);
    }

}
