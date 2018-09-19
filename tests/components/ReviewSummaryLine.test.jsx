import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ReviewSummary from '../../client/components/ReviewSummary';

describe('<ReviewSummary />', () => {
  it('should render The summary of all reviews to the DOM', () => {
    const wrapper = shallow(<ReviewSummary
      reviews={[]}
      searched={false}
      resetHomes={jest.fn()}
      length={0}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
