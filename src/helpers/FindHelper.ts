import { ElementHandle } from "puppeteer";

export type ElementResult = Promise<ElementHandle<Element>>;
export type MultiElementResult = Promise<ElementHandle<Element>[]>;

export interface FindHelper {
    getElement(selector: string): ElementResult;
    getElements(selector: string): MultiElementResult;
}
