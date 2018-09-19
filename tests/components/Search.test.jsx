import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Search from '../../client/components/Search';

describe('<Search />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Search />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should have a state', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.state().term).toEqual(null);
  });
});
