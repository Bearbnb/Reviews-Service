import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ModalButton from '../../client/components/ModalButton';

describe('<ModalButton />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<ModalButton
      header=""
      content=""
      changeRadio={jest.fn()}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
