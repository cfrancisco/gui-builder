import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { CustomButton } from '../index';

configure({ adapter: new Adapter() });

describe('CustomButton', () => {
    it('snapshot renders', () => {
        const wrapper = shallow(<CustomButton />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    /**
     * Checks the type props
     */
    it('check type props', () => {
        const props = {
            type: 'submit',
        };
        const wrapper = shallow(<CustomButton {...props} />).find('customButton');
        expect(wrapper.props().type).toEqual('submit');
    });

    /**
     * Checks the label props
     */
    it('check label props', () => {
        const wrapper = shallow(<CustomButton>My custom label</CustomButton>);

        expect(wrapper.props().children).toEqual('My custom label');
    });

    /**
     * Checks the disabled props
     */
    it('check disabled props', () => {
        const wrapper = shallow(<CustomButton disabled />);

        expect(wrapper.props().disabled).toBeTruthy();
    });

    /**
     * Checks the onClick props
     */
    it('check onClick props', () => {
        const onClickFunction = jest.fn();
        const wrapper = shallow(<CustomButton onClick={onClickFunction} />);

        wrapper.find('customButton').simulate('click');

        expect(onClickFunction).toHaveBeenCalled();
    });
});
