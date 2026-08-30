import { DeferredPromise } from "../deferredPromise.js";
import { log, logError } from "../logging.js";
import { coloredName } from "../pretty.js";
import { noopPromise, randNth } from "../util.js";
import { discoverExpansionCount, discoverKingdomCount } from "./consts.js";
import { Prompt } from "../prompt.js";
class CollectionObj {
    cards = [];
    discoverCardsSeen = new Map();
    get hand() {
        return this.cards
            .filter((c) => c.location == "hand")
            .sort((c) => c.order);
    }
    get deck() {
        return this.cards
            .filter((c) => c.location == "deck")
            .sort((c0, c1) => c0.name.localeCompare(c1.name));
    }
    get graveyard() {
        return this.cards
            .filter((c) => c.location == "graveyard")
            .sort((c0, c1) => c0.name.localeCompare(c1.name));
    }
    get inPlay() {
        return this.cards
            .filter((c) => c.location == "inplay")
            .sort((c) => c.order);
    }
    get expansionPool() {
        return this.cards
            .filter((c) => c.location == "reserve" && c.rarity == "expansion")
            .sort((c) => c.order);
    }
    get kingdomPool() {
        return this.cards
            .filter((c) => c.location == "reserve" && c.rarity == "kingdom")
            .sort((c) => c.order);
    }
    draw(n = 1) {
        if (n == 0)
            return;
        if (this.deck.length > 0) {
            var card = randNth(this.deck);
            card.location = "hand";
            log(`Drew ${coloredName(card.name)}`);
            this.draw(n - 1);
        }
        else if (this.graveyard.length > 0) {
            for (var card of this.graveyard) {
                card.location = "deck";
            }
            log("Deck empty; shuffling graveyard into deck");
            this.draw(n);
        }
        else {
            logError("No cards to draw");
        }
    }
    add(card) {
        this.cards.push(card);
        if (card.rarity == "base") {
            card.location = "deck";
        }
    }
    discoverSortScore(card) {
        const seenCount = this.discoverCardsSeen.get(card.name) ?? 0;
        const score = Math.random() + seenCount / 7;
        return score;
    }
    incDiscoverSeenCount(card) {
        var seenCount = this.discoverCardsSeen.get(card.name) ?? 0;
        this.discoverCardsSeen.set(card.name, seenCount + 1);
    }
    async discover(cards, n) {
        var choices = [];
        // pseudorandom shuffle; make it less likely to see the same card twice
        var orderedCards = cards
            .map((c) => {
            return {
                card: c,
                score: this.discoverSortScore(c),
            };
        })
            .toSorted((tup0, tup1) => {
            return tup0.score - tup1.score;
        })
            .map((tup) => tup.card);
        for (var i = 0; i < n; i++) {
            const card = orderedCards[i];
            choices.push(card);
            this.incDiscoverSeenCount(card);
        }
        var output = new DeferredPromise();
        var prompt = new Prompt("Choose up to one card:");
        const cardCallback = async (card) => {
            const clone = card.clone();
            clone.location = "graveyard";
            log("[DISCOVER]ed " + coloredName(clone.name));
            output.resolve(clone);
        };
        prompt.addCards(choices, cardCallback);
        var cancelCallback = () => {
            output.resolve(null);
            return noopPromise();
        };
        prompt.addOption("q", "Take nothing", cancelCallback);
        await prompt.invoke();
        return output.promise;
    }
    discoverExpansionCards() {
        return this.discover(this.expansionPool, discoverExpansionCount);
    }
    discoverKingdomCards() {
        return this.discover(this.kingdomPool, discoverKingdomCount);
    }
}
export const Collection = new CollectionObj();
//# sourceMappingURL=collection.js.map