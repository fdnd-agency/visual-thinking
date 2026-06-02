import * as cheerio from "cheerio"

export function normalizeHtml(html) {
    const doc = cheerio.load(html);
    const normalized = doc.text()
    .replace(/\s+/g, " ") // collapse white space.
    .replace(/\\n/g, " ") // we replace all literal \n characters in a string here.
    .trim(); // we remove all trailing whitespaces here.

    return normalized;
}