"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const common_1 = require("../pages/common");
cucumber_1.Given(/^I am on the browserstack login page "([^"]*)"$/, function BStack(homepage) {
    common_1.default.bStackLoginPage(homepage);
});
