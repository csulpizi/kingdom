import * as display from "../display/display.js";
import { Card } from "../game/card.js";
import { Collection } from "../game/collection.js";
import { Prompt } from "../prompt.js";

export async function previewCodex() {
    display.clear();
    const cardsToShow: Array<Card> = [];

    const dedupeStarters = new Set<string>();

    for (const card of Collection.deck.toSorted((c0, c1) =>
        c0.name.localeCompare(c1.name),
    )) {
        if (dedupeStarters.has(card.name)) {
            continue;
        }
        cardsToShow.push(card);
        dedupeStarters.add(card.name);
    }

    for (const card of Collection.expansionPool) {
        cardsToShow.push(card);
    }

    for (const card of Collection.kingdomPool) {
        cardsToShow.push(card);
    }

    display.showCards(
        cardsToShow.map((card) => {
            return {
                card,
                isDud: false,
                dudReason: "",
                onClick: async () => {},
                hotkey: undefined,
            };
        }),
    );

    const prompt = new Prompt("");
    prompt.addOption("Continue", false, async () => {});
    await prompt.invoke(false);
}
