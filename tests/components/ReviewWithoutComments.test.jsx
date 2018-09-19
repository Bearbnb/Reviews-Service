import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ReviewWithoutComments from '../../client/components/ReviewWithoutComments';

describe('<ReviewWithoutComments />', () => {
  it('should render The summary of all reviews to the DOM', () => {
    const baseProps = {
      review: {
        host_comments: '',
        created: '',
        photo: '',
      },
      FlagClick: jest.fn(),
    };
    const wrapper = shallow(<ReviewWithoutComments {...baseProps}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render a modal when flag icon is clicked', () => {
    const baseProps = {
      review: {
        host_comments: '',
        created: '',
        photo: '',
      },
      FlagClick: jest.fn(),
    };
    const wrapper = shallow(<ReviewWithoutComments {...baseProps} />);
    wrapper.find('button').first().simulate('click');
    expect(baseProps.FlagClick).toHaveBeenCalledTimes(1);
  });
});
