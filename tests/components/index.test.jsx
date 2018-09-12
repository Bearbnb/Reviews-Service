import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import App from '../../client/components/app';

describe('Index Component', ()=>{
	it('Index should render App to the DOM', () => {
	  const wrapper = shallow(<App />);
	  expect(toJson(wrapper)).toMatchSnapshot();
	});
})
