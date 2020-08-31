"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Commmon {
    bStackLoginPage(homepage) {
        // browser.url(homepage);
        browser.url(homepage);
        browser.maximizeWindow();
        browser.pause(2000);
        expect(browser).toHaveTitle('bstack');
    }
}
exports.default = new Commmon;
