import { Page, ElementHandle } from "puppeteer";
import { Observable, from, switchMap, catchError, of, lastValueFrom } from "rxjs";
import { ElementResult, FindHelper, MultiElementResult } from "./FindHelper";


export class PuppeteerHelper implements FindHelper {
    constructor(private page: Page) { }

    getElement(selector: string): ElementResult {
        return lastValueFrom(from(this.page.waitForSelector(selector)).pipe(
            switchMap(() => from(this.page.$(selector))),
            catchError(error => {
                console.error(`Error getting element for selector: ${selector}`, error);
                return of(null);
            })
        ));
    }

    getElements(selector: string): MultiElementResult {
        return lastValueFrom(from(this.page.waitForSelector(selector)).pipe(
            switchMap(() => from(this.page.$$(selector))),
            catchError(error => {
                console.error(`Error getting elements for selector: ${selector}`, error);
                return of([]);
            })
        ))
    }
}
