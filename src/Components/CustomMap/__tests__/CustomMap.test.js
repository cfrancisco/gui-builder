import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import CustomMap from '../CustomMap';

configure({ adapter: new Adapter() });

describe('CustomMap', () => {
    it('should render correctly setting the data', () => {
        const props = {
            markersData: [{
                title: 'Point A',
                latLng: {
                    lat: 40,
                    lng: 35,
                },
            }],
            center: [39.8419, 34.0315],
        };
        const wrapper = shallow(<CustomMap {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
