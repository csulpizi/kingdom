import * as display from "../display/display.js";
import {
    gloryPointsToWin,
    maxHandSize,
    startingAcres,
    startingFarms,
    startingGold,
    startingHand,
} from "../game/consts.js";
import * as pretty from "../display/pretty.js";
import { Prompt } from "../prompt.js";

export async function showHowToPlay() {
    display.clear();
    display.showMessage(pretty.coloredName("<h2>How to Play</h2>"));
    display.showMessage(pretty.coloredName("<h3>Goal</h3>"));
    display.showMessage(
        `<p>You win when you get ${gloryPointsToWin} [GLORY]. The goal of the game is to see how quickly you can reach the game end</p>`,
    );
    display.showMessage(pretty.coloredName("<h3>Resources</h3>"));
    display.showMessage(
        "<p>The main resources in the game are [GOLD] and [FOOD]. [GOLD] is gained by playing cards. [FOOD] is produced by [FARM]s. At the start of each turn, you gain 1 [FOOD] for each [FARM] you have. Any unused [FOOD] expires at the end of each turn.</p>",
    );
    display.showMessage(
        `<p>You start each game with ${startingGold} [GOLD], ${startingFarms} [FARM]s, and ${startingAcres} [ACRE]s. At the start of each turn, if you have any [ACRE]s left over, convert 1 [ACRE] into 1 [FARM].</p>`,
    );
    display.showMessage(pretty.coloredName("<h3>Cards</h3>"));
    display.showMessage(
        `<p>You start each game with a set of base cards. At the start of your first turn, draw ${startingHand} cards. Every turn thereafter draw 1 card.</p>`,
    );
    display.showMessage(
        `<p>Whenever you play a card, you pay the required [GOLD] and [FOOD] costs, then move the card into your graveyard. If the played card was a [LAND], it instead 'stays in play' until it is discarded or [BURN]ed. If the played card was marked [BURN], it instead is removed from the game</p>`,
    );
    display.showMessage(
        `<p>If you would draw a card while the deck is empty, shuffle all of the cards in your graveyard back into your deck then draw.</p>`,
    );
    display.showMessage(
        `<p>You can have a maximum of ${maxHandSize} cards in your hand. If you draw a card while your hand is full, discard the first card in your hand.</p>`,
    );
    display.showMessage(
        `<p>In order to gain [GLORY] you'll need to [DISCOVER] cards. There are [EXPANSION] cards and [KINGDOM] cards.</p>`,
    );
    display.showMessage(
        `<p>[EXPANSION] cards are better than your base cards. They give you access to better card draw, gold production, and allow you to [DISCOVER] [KINGDOM] cards.</p>`,
    );
    display.showMessage(
        `<p>[KINGDOM] cards are better than [EXPANSION] cards. They let you gain [GLORY] and provide even better effects than [EXPANSION] cards.</p>`,
    );
    display.showMessage(
        `<p>Certain cards let you [DISCOVER] either [EXPANSION] or [KINGDOM] cards. You are given the choice between 2 of those cards to add to your deck. When a card is [DISCOVER]ed, it goes into your graveyard unless otherwise specified.</p>`,
    );

    display.showMessage(
        `<h3>Anatomy of a Card</h3>`
    );
    display.showMessage(
        '<div>' +
        '<img src="images/card_sample.png" class="demo-card">' + 
        '<ul>' +
        '<li>1. Card name. "Ascend"</li>' +
        '<li>2. Cost. 2[FOOD] and and 4[GOLD]</li>' +
        '<li>3. Effect</li>' +
        '<li>4. Outline. In this case the green outline shows that it is a [EXPANSION] card. Blue indicates it is a [KINGDOM] card</li>' +
        '<li>5. Hotkey (Desktop only). You can play this card by pressing the shown keyboard key instead of clicking on it</li>' +
        '</ul>' +
        '</div>'
    );

    display.showMessage(pretty.coloredName("<h3>Hints</h3>"));
    display.showMessage(`<ul>`);
    display.showMessage(
        `<li>[LAND]s provide incremental value, so discarding them to effects isn't necessarily a bad thing</li>`,
    );
    display.showMessage(`</ul>`);

    display.showMessage("<br>");
    const prompt = new Prompt("");
    prompt.addOption("Continue", false, async () => {});
    await prompt.invoke(false);
}
