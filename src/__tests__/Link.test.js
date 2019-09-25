import React from 'react';
import renderer from 'react-test-renderer';

import Link from '../Components/Link/Link';

it('Link with href attribute should render correctly', () => {
    const tree = renderer
        .create(<Link href="whatever" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
