import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Review from '../../client/components/Review';

describe('<Review />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Review review={{
      host: { photo: '', host_comments: '' },
      review: {},
    }}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});