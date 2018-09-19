import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import AppReviewsService from '../../client/components/AppReviewsService';

describe('AppReviewsService Component', () => {
  it('AppReviewsService should render App to the DOM', () => {
    const wrapper = shallow(<AppReviewsService />);
	  expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call componentDidMount once', () => {
    const spy = jest.spyOn(AppReviewsService.prototype, 'componentDidMount');
    const wrapper = mount(<AppReviewsService />);

    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });
});
