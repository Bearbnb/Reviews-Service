import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import FlagModal from '../../client/components/FlagModal';

describe('<FlagModal />', () => {
    it('should render properly', () => {
        const wrapper = shallow(<FlagModal
            showModal={true}
            hideModalFunc={()=>{}}
        />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
