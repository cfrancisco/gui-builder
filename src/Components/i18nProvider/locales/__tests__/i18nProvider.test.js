import React from 'react';
import {
    shallow,
    configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import I18nProvider from '../../i18nProvider';
import devicesPTBR from '../pt/devices.json';
import devicesENUS from '../en/devices.json';

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
        const ptKeys = getDeepKeys(devicesPTBR);
        const enKeys = getDeepKeys(devicesENUS);

        expect(ptKeys).toEqual(enKeys);
    });

    test('i18n must return an string with no traduction founded', () => {
        const translate = shallow(<I18nProvider subject="devices" term="title_sidebar.new_attr" />);

        expect(translate).toMatchObject({});
    });
});
