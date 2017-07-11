import {BasePage} from "../helpers/wrappers/base.page";
import {by, element} from "protractor";
import {By} from "selenium-webdriver";

export class GooglePage extends BasePage {
    private readonly _inputField: By;
    private readonly _searchButton: By;
    private readonly _firstSite: By;

    constructor(){
        super();
        this._inputField = by.name('q');
        this._searchButton = by.name('btnG');
        this._firstSite = by.css('#rso > div > div > div:nth-child(1) > div > div > h3 > a');
    }

    private async _fillInputField(text: string) : Promise<void> {
        await this.type(text, this._inputField)
    }

    private async _clickSearchButton() : Promise<void> {
        await this.click(this._searchButton)
    }

    private async _clickOnFirstSite() : Promise<void> {
        await this.click(this._firstSite);
    }

    public async openSite(text: string) : Promise<void> {
        await this._fillInputField(text);
        await this._clickSearchButton();
        await this._clickOnFirstSite();
    }

}