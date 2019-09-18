/* eslint-disable no-undef */

// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Link from './Components/Link/Link';

it('Link should render correctly', () => {
    const tree = renderer
        .create(<Link />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
it('Link with href attribute should render correctly', () => {
    const tree = renderer
        .create(<Link href="se lascar" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
