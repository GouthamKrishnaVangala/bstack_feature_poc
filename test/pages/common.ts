import {assert} from "chai"

class Commmon {

    bStackLoginPage(homepage:string){
        // browser.url(homepage);
        browser.url(homepage);
        browser.maximizeWindow();
        browser.pause(2000);
    }
}

export default new Commmon;