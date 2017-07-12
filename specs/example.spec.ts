import {GooglePage} from "../src/page_objects/google.page";
import {browser} from "protractor";

describe('this is example with typescript', async () => {
    let googlePage = new GooglePage();

    it('should have a valid url', async () => {
        await googlePage.openSite('PageObject - Martin Fowler');
        expect(browser.getCurrentUrl()).toEqual('https://martinfowler.com/bliki/PageObject.html');
    });
});