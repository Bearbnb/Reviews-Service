import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import SubHeader from '../../client/components/SubHeader';

describe('<SubHeader />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<SubHeader
      searched
      categories={[{}]}
      ratingToStars={jest.fn()}
      reviews={[]}
      term=""
      resetHomes={jest.fn()}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render properly when no search', () => {
    const wrapper = shallow(<SubHeader
      searched={false}
      categories={[{}]}
      ratingToStars={jest.fn()}
      reviews={[]}
      term=""
      resetHomes={jest.fn()}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
