import { shallow, mount, render } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../../client/components/index';

it('App should render to the DOM', () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

