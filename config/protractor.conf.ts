import {browser, Config} from "protractor";
import {CoreConstants} from "../src/helpers/constants/core.constants";

let conf: Config = {
    directConnect: true,
    specs: [
        '../specs/**/*.spec.js',
        '../specs/*.spec.js'
    ],
    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        await browser.get(CoreConstants.BASE_URL);

        let { SpecReporter } = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },
    SELENIUM_PROMISE_MANAGER: false
};

exports.config = conf;