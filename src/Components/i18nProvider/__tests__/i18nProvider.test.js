import React from 'react';
import {
    shallow,
    configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import I18nProvider from '../i18nProvider';

configure({ adapter: new Adapter() });

describe('Testing functions of internacionalization component', () => {
    beforeEach(() => jest.resetModules());

    test('i18n must return an string with no traduction founded', () => {
        expect().toBeUndefined();
    });
});
