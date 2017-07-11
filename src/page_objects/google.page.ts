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

    private _fillInputField(text: string) : Promise<void> {
        return this.type(text, this._inputField)
    }

    private _clickSearchButton() : Promise<void> {
        return this.click(this._searchButton)
    }

    private _clickOnFirstSite() : Promise<void> {
        return this.click(this._firstSite);
    }

    public openSite(text: string) : Promise<void> {
        this._fillInputField(text);
        this._clickSearchButton();
        return this._clickOnFirstSite();
    }

}