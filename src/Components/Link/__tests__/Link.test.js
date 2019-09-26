import React from 'react';
import renderer from 'react-test-renderer';

import Link from '../Link';

it('Link should render correctly', () => {
    const tree = renderer
        .create(<Link />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Link with href attribute should render correctly', () => {
    const tree = renderer
        .create(<Link href="www.cpqd.com.br" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
