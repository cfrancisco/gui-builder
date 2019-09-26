import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { DojotButton } from '../Components/Button/index';


configure({ adapter: new Adapter() });

describe('DojotButton', () => {
    /**
     * Checks whether the DojotButton renders correctly without any props
     */
    it('should render without any props', () => {
        const component = mount(<DojotButton />);
        expect(toJson(component)).toMatchSnapshot();
    });

    /**
     * Checks the type props
     */
    it('check type props', () => {
        const component = mount(<DojotButton type="submit" />);

        expect(component.find('button[type="submit"]')).toHaveLength(1);
    });

    /**
     * Checks the label props
     */
    it('check label props', () => {
        const component = mount(<DojotButton label="My custom label" />);

        expect(component.find('button').text()).toEqual('My custom label');
    });

    /**
     * Checks the disabled props
     */
    it('check disabled props', () => {
        const component = mount(<DojotButton disabled />);

        expect(component.find('button').props().disabled).toBeTruthy();
    });

    /**
     * Checks the onClick props
     */
    it('check onClick props', () => {
        const onClickFunction = jest.fn();
        const component = mount(<DojotButton onClick={onClickFunction} />);

        component.find('button').simulate('click');

        expect(onClickFunction).toHaveBeenCalled();
    });
});
