import {GooglePage} from "../src/page_objects/google.page";
import {browser} from "protractor";

describe('this is example with typescript', async () => {
    let googlePage = new GooglePage();

    beforeEach(async () => {
        await googlePage.openSite('PageObject - Martin Fowler');
    });

    it('should have a valid url', async () => {
        await expect(browser.getCurrentUrl()).toBe('https://martinfowler.com/bliki/PageObject.html');
    });

});