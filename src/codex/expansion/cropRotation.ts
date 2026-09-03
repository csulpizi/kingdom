import { Card, Rarity } from "../../game/card.js";
import { Game } from "../../game/game.js";

const nFarm = 4;
const nAcre = 6;
export class CropRotation extends Card {
    name = "Crop Rotation";
    rarity: Rarity = "expansion";
    food = 2;
    gold = 0;
    art = "crop_rotation";
    describe = `Lose ${nFarm} [FARM]s. Gain ${nAcre} [ACRE]s`;
    protected gateKeep(): { playable: boolean; reason: string } {
        return {
            playable: Game.farms >= nFarm,
            reason: "Not enough [FARM]s",
        };
    }
    async resolve(): Promise<void> {
        Game.loseFarm(nFarm);
        Game.gainAcre(nAcre);
    }
}
