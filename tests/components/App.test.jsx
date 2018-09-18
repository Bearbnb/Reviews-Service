import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import App from '../../client/components/app';

describe('App Component', () => {
  it('App should render App to the DOM', () => {
	  const wrapper = shallow(<App />);
	  expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call componentDidMount once', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);

    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
