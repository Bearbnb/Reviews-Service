import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import HostComments from '../../client/components/HostComments';

describe('<HostComments />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<HostComments review={{
      host: { photo: '', host_comments: '' },
      review: {},
    }}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
