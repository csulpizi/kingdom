import { Collection } from "../game/collection.js";

import { DiscardLand } from "./base/discardLand.js";
import { Draw } from "./base/draw.js";
import { Expand } from "./base/expand.js";
import { GoldLand } from "./base/goldLand.js";
import { Harvest } from "./base/harvest.js";
import { Tax } from "./base/tax.js";
import { Wastes } from "./base/wastes.js";

import { BurnDraw } from "./expansion/burnDraw.js";
import { BurnLand } from "./expansion/burnLand.js";
import { Clearcut } from "./expansion/clearcut.js";
import { CloneLand } from "./expansion/cloneLand.js";
import { CropRotation } from "./expansion/cropRotation.js";
import { DrawLand } from "./expansion/drawLand.js";
import { DrawPlus } from "./expansion/drawPlus.js";
import { EminentDomain } from "./expansion/eminentDomain.js";
import { ExpandKingdom } from "./expansion/expandKingdom.js";
import { Forge } from "./expansion/forge.js";
import { GainGold } from "./expansion/gainGold.js";
import { Industry } from "./expansion/industry.js";
import { GoldLandPlus } from "./expansion/goldLandPlus.js";
import { InnovateLandDiscard } from "./expansion/innovateLandDiscard.js";
import { KingdomToHand } from "./expansion/kingdomToHand.js";
import { Ritual } from "./expansion/ritual.js";
import { taxPlus } from "./expansion/taxPlus.js";

import { Abundance } from "./kingdom/abundance.js";
import { DiscoverTwo } from "./kingdom/discoverTwo.js";
import { DrawLandPlus } from "./kingdom/drawLandPlus.js";
import { ExpensiveGlory } from "./kingdom/expensiveGlory.js";
import { FiresOfIndustry } from "./kingdom/firesOfIndustry.js";
import { InexpensiveGlory } from "./kingdom/inexpensiveGlory.js";
import { Kingswood } from "./kingdom/kingswood.js";
import { Prosperity } from "./kingdom/prosperity.js";

export function initialize() {
    Collection.add(new Draw());
    Collection.add(new Draw());
    Collection.add(new Expand());
    Collection.add(new Expand());
    Collection.add(new Tax());
    Collection.add(new Tax());
    Collection.add(new Harvest());
    Collection.add(new DiscardLand());
    Collection.add(new Wastes());
    Collection.add(new GoldLand());

    Collection.add(new BurnDraw());
    Collection.add(new BurnLand());
    Collection.add(new Clearcut());
    Collection.add(new CloneLand());
    Collection.add(new CropRotation());
    Collection.add(new DrawLand());
    Collection.add(new DrawPlus());
    Collection.add(new EminentDomain());
    Collection.add(new ExpandKingdom());
    Collection.add(new Forge());
    Collection.add(new GainGold());
    Collection.add(new GoldLandPlus());
    Collection.add(new Industry());
    Collection.add(new InnovateLandDiscard());
    Collection.add(new KingdomToHand());
    Collection.add(new Ritual());
    Collection.add(new taxPlus());

    Collection.add(new Abundance());
    Collection.add(new DiscoverTwo());
    Collection.add(new DrawLandPlus());
    Collection.add(new ExpensiveGlory());
    Collection.add(new FiresOfIndustry());
    Collection.add(new InexpensiveGlory());
    Collection.add(new Kingswood());
    Collection.add(new Prosperity());
}
