import {browser, element, ProtractorBy, ExpectedConditions as EC} from "protractor";
import {By} from "selenium-webdriver";
import {CoreConstants} from '../constants/core.constants'

export class WaitConditions {

    public async clickable(locator: By | ProtractorBy, opt_message?: string) {
        await browser.wait(EC.elementToBeClickable(element(locator)), CoreConstants.WAIT_TIMEOUT, opt_message)
    }

}