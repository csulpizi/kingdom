import { Card } from "../../game/card.js";
import { Game } from "../../game/game.js";
const nFarm = 2;
const nAcre = 4;
export class CropRotation extends Card {
    name = "Crop Rotation";
    rarity = "expansion";
    food = 2;
    gold = 0;
    describe = `Lose ${nFarm} [FARM]s. Gain ${nAcre} [ACRE]s`;
    gateKeep() {
        return {
            playable: Game.farms >= nFarm,
            reason: "Not enough [FARM]s",
        };
    }
    async resolve() {
        Game.loseFarm(nFarm);
        Game.gainAcre(nAcre);
    }
}
//# sourceMappingURL=cropRotation.js.map