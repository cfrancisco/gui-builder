import * as locales from '../locales/Menu';

function getDeepKeys(obj) {
    let keys = [];
    for (const key of Object.keys(obj)) {
        keys.push(key);
        if (typeof obj[key] === 'object') {
            const subkeys = getDeepKeys(obj[key]);
            keys = keys.concat(subkeys.map((subkey) => `${key}.${subkey}`));
        }
    }
    return keys;
}


describe('Testing functions of internacionalization component', () => { 
    test('Both locale files must have the same keys', () => {
        const localesArray = Object.values(locales.default);
        const localePT = Object.values(localesArray)[0];
        const localeEN = Object.values(localesArray)[1];

        const ptKeys = getDeepKeys(localePT);
        const enKeys = getDeepKeys(localeEN);

        expect(ptKeys).toEqual(enKeys);
    });
});
