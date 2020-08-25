"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Commmon {
    bStackLoginPage(homepage) {
        // browser.url(homepage);
        browser.url(homepage);
        browser.maximizeWindow();
        browser.pause(2000);
    }
}
exports.default = new Commmon;
