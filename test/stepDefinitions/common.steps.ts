import {Given} from "cucumber"; 
import General from "../pages/common"


Given(/^I am on the browserstack login page "([^"]*)"$/,
    function BStack(homepage:string){
        General.bStackLoginPage(homepage); 
    });
