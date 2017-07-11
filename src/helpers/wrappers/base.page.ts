import {browser, element, ElementArrayFinder, ElementFinder, protractor, ProtractorBy, ExpectedConditions as EC} from 'protractor'
import {WaitConditions} from '../waiters/wait.conditions'
import {By} from "selenium-webdriver";
import {CoreConstants} from "../constants/core.constants";

export abstract class BasePage {

    private _conditions: WaitConditions = new WaitConditions();

    protected async click(locator: By | ProtractorBy) : Promise<void> {
            await this._conditions.clickable(locator);
            await element(locator).click();
        }

    protected async clearInput(locator: By | ProtractorBy){
        await this._conditions.clickable(locator);
        await element(locator).clear();
    }

    protected async type(text: string, locator: By | ProtractorBy){
        await this.clearInput(locator);
        await this._conditions.clickable(locator);
        await element(locator).sendKeys(text);
    }

}