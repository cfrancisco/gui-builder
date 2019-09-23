import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
// import { Button } from './index';
import { Button } from '@material-ui/core';


configure({ adapter: new Adapter() });

describe('Button', () => {
    /**
     * Checks whether the Button renders correctly without any props
     */
    it('should render without any props', () => {
        const component = mount(<Button />);
        expect(toJson(component)).toMatchSnapshot();
    });

    /**
     * Checks the type props
     */
    it('check type props', () => {
        const component = mount(<Button type="submit" />);

        expect(component.find('button[type="submit"]')).toHaveLength(1);
    });

    /**
     * Checks the label props
     */
    it('check label props', () => {
        const component = mount(<Button label="My custom label" />);

        expect(component.find('button').text()).toEqual('My custom label');
    });

    /**
     * Checks the disabled props
     */
    it('check disabled props', () => {
        const component = mount(<Button disabled />);

        expect(component.find('button').props().disabled).toBeTruthy();
    });

    /**
     * Checks the onClick props
     */
    it('check onClick props', () => {
        const onClickFunction = jest.fn();
        const component = mount(<Button onClick={onClickFunction} />);

        component.find('button').simulate('click');

        expect(onClickFunction).toHaveBeenCalled();
    });
});
