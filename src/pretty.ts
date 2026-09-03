class Token {
    keyword: string;
    replace: string;
    iconId: string | undefined;
    constructor(word: string, iconId: string | undefined = undefined) {
        this.keyword = `[${word.toUpperCase()}]`;
        this.replace = textSpan(word.toLowerCase(), word, iconId);
        this.iconId = iconId;
    }
}

const goldToken = new Token("Gold", "gold");
const foodToken = new Token("Food", "food");

const tokens: Array<Token> = [
    goldToken,
    foodToken,
    new Token("Farm", "farms"),
    new Token("Acre", "acres"),
    new Token("Glory", "glory"),
    new Token("Land", "land"),
    new Token("Burn", "burn"),
    new Token("Discover"),
    new Token("Expansion"),
    new Token("Kingdom"),
];

function icon(id: string) {
    return `<img class="icon" src="icons/${id}.svg"> `;
}

function textSpan(type: string, word: string, iconId: string | undefined) {
    const glyph = iconId ? icon(iconId) : "";
    return `<span class="${type}-text">${glyph}${word}</span>`;
}

export function turnString(txt: string): string {
    return textSpan("cyan", txt, undefined);
}

export function coloredName(name: string): string {
    return textSpan("name", name, undefined);
}

export function greySpan(text: string): string {
    return textSpan("grey", text, undefined);
}

export function dudSpan(text: string): string {
    return textSpan("dud", text, undefined);
}

export function errorSpan(text: string): string {
    return textSpan("error", text, undefined);
}

export function nFood(n: number): string {
    return `<span class=food-text>${icon(<string>foodToken.iconId).repeat(n)}</span>`;
}

export function nGold(n: number): string {
    return `<span class=gold-text>${icon(<string>goldToken.iconId).repeat(n)}</span>`;
}

export function pretty(s: string): string {
    for (const token of tokens) {
        s = s.replaceAll(token.keyword, () => token.replace);
    }
    return s;
}
