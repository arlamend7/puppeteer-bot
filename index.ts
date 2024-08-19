import puppeteer from "puppeteer";
import config from "./src/environments/environment";
import { MainView } from "./src/views/main.view";
import { Language } from "./src/views/settings.view";


(async () => {
    const browser = await puppeteer.launch(config.puppeteerOptions);
    const page = await browser.newPage();

    
    var main = await MainView.Open(page, {
        parameter1: "something"
    });

    var settingsModal = await main.OpenSettings();
    
    await settingsModal.ChangeLanguage(Language.English);

    await browser.close();
})();