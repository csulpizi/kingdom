import { gloryPointsToWin, maxHandSize, startingAcres, startingFarms, startingGold, startingHand, } from "../game/consts.js";
import { waitForAnyKeyPress } from "../input.js";
import { MainDisplay } from "../mainDisplay.js";
import { coloredString } from "../pretty.js";
import { Prompt } from "../prompt.js";
import { noopPromise } from "../util.js";
export async function helpAction() {
    MainDisplay.clearContent();
    MainDisplay.writeLine(coloredString("Help", "cyan"));
    MainDisplay.writeLine(coloredString("---", "gray"));
    var prompt = new Prompt("Choose an options:");
    prompt.addOption("1", "Rules", showRules);
    prompt.addOption("2", "Glossary", showKeywords);
    prompt.addOption("q", "Back", noopPromise);
    await prompt.invoke();
}
async function showRules() {
    MainDisplay.clearContent();
    MainDisplay.writeLine(coloredString("Rules", "cyan"));
    MainDisplay.writeLine(coloredString("---", "gray"));
    MainDisplay.writeNoLine(coloredString("<b>=== Goal ===</b>", "cyan"));
    MainDisplay.writeNoLine(`<p>You win when you get ${gloryPointsToWin} [GLORY]. The goal of the game is to see how quickly you can reach the game end</p>`);
    MainDisplay.writeLine(coloredString("<b>=== Resources ===</b>", "cyan"));
    MainDisplay.writeNoLine("<p>The main resources in the game are [GOLD] and [FOOD]. [GOLD] is gained by playing cards. [FOOD] is produced by [FARM]s. At the start of each turn, you gain 1 [FOOD] for each [FARM] you have. Any unused [FOOD] expires at the end of each turn.</p>");
    MainDisplay.writeNoLine(`<p>You start each game with ${startingGold} [GOLD], ${startingFarms} [FARM]s, and ${startingAcres} [ACRE]s. At the start of each turn, if you have any [ACRE]s left over, convert 1 [ACRE] into 1 [FARM].</p>`);
    MainDisplay.writeLine(coloredString("<b>=== Cards ===</b>", "cyan"));
    MainDisplay.writeNoLine(`<p>You start each game with a set of base cards. At the start of your first turn, draw ${startingHand} cards. Every turn thereafter draw 1 card.</p>`);
    MainDisplay.writeNoLine(`<p>Whenever you play a card, you pay the required [GOLD] and [FOOD] costs, then move the card into your graveyard. If the played card was a [LAND], it instead 'stays in play' until it is discarded or [BURN]ed. If the played card was marked [BURN], it instead is removed from the game</p>`);
    MainDisplay.writeNoLine(`<p>If you would draw a card while the deck is empty, shuffle all of the cards in your graveyard back into your deck then draw.</p>`);
    MainDisplay.writeNoLine(`You can have a maximum of ${maxHandSize} cards in your hand. If you draw a card while your hand is full, discard the first card in your hand.</p>`);
    MainDisplay.writeNoLine(`<p>In order to gain [GLORY] you'll need to [DISCOVER] cards. There are [EXPANSION] cards and [KINGDOM] cards.</p>`);
    MainDisplay.writeNoLine(`<p>[EXPANSION] cards are better than your base cards. They give you access to better card draw, gold production, and allow you to [DISCOVER] [KINGDOM] cards.</p>`);
    MainDisplay.writeNoLine(`<p>[KINGDOM] cards are better than [EXPANSION] cards. They let you gain [GLORY] and provide even better effects than [EXPANSION] cards.</p>`);
    MainDisplay.writeNoLine(`<p>Certain cards let you [DISCOVER] either [EXPANSION] or [KINGDOM] cards. You are given the choice between 2 of those cards to add to your deck. When a card is [DISCOVER]ed, it goes into your graveyard unless otherwise specified.</p>`);
    MainDisplay.writeLine(coloredString("<b>=== Hints ===</b>", "cyan"));
    MainDisplay.writeNoLine(`<ul>`);
    MainDisplay.writeNoLine(`<li>[LAND]s provide incremental value, so discarding them to effects isn't necessarily a bad thing</li>`);
    MainDisplay.writeNoLine(`</ul>`);
    MainDisplay.writeLine("");
    MainDisplay.writeLine("Press any key to return");
    await waitForAnyKeyPress();
    await helpAction();
}
async function showKeywords() {
    MainDisplay.clearContent();
    MainDisplay.writeLine(coloredString("Glossary", "cyan"));
    MainDisplay.writeLine(coloredString("---", "gray"));
    MainDisplay.writeLine("[GOLD] -&#9;Resource used to pay for cards");
    MainDisplay.writeLine("[FOOD] -&#9;Resource used to pay for cards. [FOOD] expires at the end of each turn");
    MainDisplay.writeLine("[FARM] -&#9;How much [FOOD] you generate each turn");
    MainDisplay.writeLine("[ACRE] -&#9;At the start of each turn, convert 1 [ACRE] into 1 [FARM]");
    MainDisplay.writeLine(`[GLORY] -&#9;When you gain ${gloryPointsToWin} [GLORY], you win.`);
    MainDisplay.writeLine("");
    MainDisplay.writeLine("[LAND] -&#9;[LAND] cards stay in play when you play them. Certain cards discard or [BURN] lands in play");
    MainDisplay.writeLine("[BURN] -&#9;Cards that are [BURN]ed are permanently removed from the game");
    MainDisplay.writeLine("");
    MainDisplay.writeLine("[EXPANSION] -&#9;[EXPANSION] cards are cards that are more powerful than your starting cards");
    MainDisplay.writeLine("[KINGDOM] -&#9;[KINGDOM] cards are even more powerful than [EXPANSION] cards");
    MainDisplay.writeLine("[DISCOVER] -&#9;Whenever you [DISCOVER] either [EXPANSION] cards or [KINGDOM] cards, looking at 2 options, choose 1, and put it into your graveyard");
    MainDisplay.writeLine("");
    MainDisplay.writeLine("Press any key to return");
    await waitForAnyKeyPress();
    await helpAction();
}
//# sourceMappingURL=help.js.map