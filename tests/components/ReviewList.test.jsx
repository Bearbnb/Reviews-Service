import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ReviewList from '../../client/components/ReviewList';

describe('<ReviewList />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<ReviewList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('should call HandlePrev when clicking < button', () => {
  //   const handle = jest.fn();
  //   const wrapper = shallow(<ReviewList
  //     currentPage={5}
  //     reviewlist={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
  //     pages={1, 2, 3, 4, 5, 6},
  //     HandlePrev = { handle}
  //   />);
  //   wrapper.find('div > div > div > button').first().simulate('click');
  //   expect(HandlePrev).toHaveBeenCalled();
  // });
});
