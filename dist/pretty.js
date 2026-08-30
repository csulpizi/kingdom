export function coloredString(s, color) {
    return `<span class="${color}-text">${s}</span>`;
}
export function coloredName(s) {
    return coloredString(s, "name");
}
export function nFood(n) {
    return coloredString("F".repeat(n), "food");
}
export function nGold(n) {
    return coloredString("G".repeat(n), "gold");
}
export function pretty(s) {
    s = s.replaceAll("[GOLD]", coloredString("Gold", "gold"));
    s = s.replaceAll("[FOOD]", coloredString("Food", "food"));
    s = s.replaceAll("[FARM]", coloredString("Farm", "farm"));
    s = s.replaceAll("[ACRE]", coloredString("Acre", "farm"));
    s = s.replaceAll("[GLORY]", coloredString("Glory", "glory"));
    s = s.replaceAll("[LAND]", coloredString("Land", "land"));
    s = s.replaceAll("[BURN]", coloredString("Burn", "burn"));
    s = s.replaceAll("[DISCOVER]", coloredString("Discover", "discover"));
    s = s.replaceAll("[EXPANSION]", coloredString("Expansion", "expansion"));
    s = s.replaceAll("[KINGDOM]", coloredString("Kingdom", "kingdom"));
    return s;
}
//# sourceMappingURL=pretty.js.map