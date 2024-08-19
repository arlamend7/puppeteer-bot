import { Page } from "puppeteer";
import { InteractableView, Selectors } from "./base/interactable-view";
import { FindHelper, MultiElementResult } from "../helpers/FindHelper";
import { SettingsView } from "./settings.view";


interface MainSelectors extends Selectors {
    sidebarFooter: MultiElementResult;
}

export class MainView extends InteractableView<MainSelectors> {
    protected defineElements(helper: FindHelper): MainSelectors {
        return {
            sidebarFooter: helper.getElements('div.home__sidebar-footer li'),
        }
    }

    static async Open(page: Page, params? : any) : Promise<MainView> {
        var url = "";

        await page.goto(url, { waitUntil: ["domcontentloaded", "load", "networkidle0", "networkidle2"] });
        return new MainView(page);
    } 

    async OpenSettings() : Promise<SettingsView> {
        const footerListItems = await this.elements.sidebarFooter;
        if (footerListItems.length > 0) {
            await footerListItems[0].click();
        }

        return new SettingsView(this.page);
    }
}