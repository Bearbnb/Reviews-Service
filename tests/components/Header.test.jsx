import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Header from '../../client/components/Header';

const ratingToStars = (number) => {
  const stars = [];
  let num = number;
  for (let i = 0; i < 5; i += 1) {
    if (num >= 1) {
      stars.push('whole');
    } else if (num > 0) {
      stars.push('half');
    } else {
      stars.push('empty');
    }
    num -= 1;
  }
  return stars;
};
describe('<Header />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Header
      searched
      average={0}
      ratingToStars={ratingToStars}
      length={0}
      term=""
      onClick={jest.fn()}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
