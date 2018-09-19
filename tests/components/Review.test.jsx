import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Review from '../../client/components/Review';

describe('<Review />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Review
      review={{
        created: '', host_comments: '', house_id: '', name: '', photo: '', rating: '', review: '',
      }}
      host={{ photo: '', created: '', name: '' }}
      FlagClick={jest.fn()}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
