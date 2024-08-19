import { InteractableView, Selectors } from "./base/interactable-view";
import { ElementResult, FindHelper, MultiElementResult } from "../helpers/FindHelper";

export enum Language {
    English = 0,
    French = 1,
    Chinese = 2
}

interface SettingsSelectors extends Selectors {
    settingsButtons: MultiElementResult;
    saveButton: ElementResult;
    closeButton: ElementResult;
}

export class SettingsView extends InteractableView<SettingsSelectors> {

    protected defineElements(helper: FindHelper): SettingsSelectors {
        return {
            settingsButtons: helper.getElements('ul.settings__buttons li'),
            saveButton: helper.getElement('button.settings__action-btn_save'),
            closeButton: helper.getElement('button.settings__close')
        }
    }

    async ChangeLanguage(lang: Language) : Promise<void> {
        const langIndex = lang;

        var settingsButtonsListItems = await this.elements.settingsButtons;
        if (settingsButtonsListItems.length > 0) {
            await settingsButtonsListItems[langIndex].click();
        }

        const [response] = await Promise.all([
            this.page.waitForResponse(''),
            this.elements.saveButton.then(x => x.click()),
        ]);

        if (!response.ok()) {
            throw new Error(`Request failed with status ${response.status()}`);
        }
    }

}