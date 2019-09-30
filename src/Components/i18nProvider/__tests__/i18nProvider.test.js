import React from 'react';
import {
    shallow,
    configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import I18nProvider from '../i18nProvider';
import * as locales from '../../../Containers/AddTodo/locales/AddTodo';

configure({ adapter: new Adapter() });

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
    beforeEach(() => jest.resetModules());

    test('Both locale files must have the same keys', () => {
        const localesArray = Object.values(locales.default);
        const localePT = Object.values(localesArray)[0];
        const localeEN = Object.values(localesArray)[1];

        const ptKeys = getDeepKeys(localePT);
        const enKeys = getDeepKeys(localeEN);

        expect(ptKeys).toEqual(enKeys);
    });

    test('i18n must return an string with no traduction founded', () => {
        const translate = shallow(<I18nProvider localeObj={locales} termKey="title_sidebar.new_attr" />);

        expect(translate).toMatchObject({});
    });
});
