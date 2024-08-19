import { Page } from "puppeteer";
import { PuppeteerHelper } from "../../helpers/PuppeteerHelper";
import { ElementResult, FindHelper, MultiElementResult } from "../../helpers/FindHelper";

export type Selectors = { [key: string]: ElementResult | MultiElementResult };


export abstract class InteractableView<T extends Selectors> {
    protected elements: T;

    constructor(public page: Page, protected url?: string) {
        var helper = new PuppeteerHelper(this.page);
        this.elements = this.defineElements(helper);
    }

    protected abstract defineElements(helper: FindHelper): T;
}


