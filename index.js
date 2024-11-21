const process = require('process');
const fs = require('fs');

const argv = process.argv.slice(2);

function read(f) {
    const r = JSON.parse(fs.readFileSync(f, 'utf-8'));
    return r;
}

function getLangName(loc, id) {
    const f = `./node_modules/cldr-localenames-full/main/${loc}/languages.json`;
    const o = read(f);
    return o.main[loc].localeDisplayNames.languages[id];
}

/**
 * 
 * @param {string} loc bcp47 for locale
 * @param {string} id emoji id
 * @returns 
 */
function getAnnotationBlob(loc, id) {
    const f = `./node_modules/cldr-annotations-full/annotations/${loc}/annotations.json`;
    const o = read(f);
    return o.annotations.annotations[id];
}

const KEYBOARD = '⌨';

function getKeywordsFor(loc, lang) {
    const name = getLangName(loc, lang);
    const kbd = getAnnotationBlob(loc, KEYBOARD).tts.join(' ');
    return `${name} ${kbd}`;
}
/**
 * @param {string} lang bcp47 id of language
 */
function getKeywords(lang) {
    const k = [];

    try {
        k.push(getKeywordsFor(lang, lang));
    } catch(e) {
        // console.error(e); TODO: probably not interesting
        console.error(`Warning: Could not get self-name for ${lang}`);
    }
    k.push(getKeywordsFor('en', lang));
    k.push(getKeywordsFor('fr', lang));

    return k;
}


argv.forEach(lang=>console.dir({lang, keywords: getKeywords(lang)}));
