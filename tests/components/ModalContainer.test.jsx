import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import ModalContainer from '../../client/components/ModalContainer';

describe('<ModalContainer />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<ModalContainer
      hideModalFunc={jest.fn()}
      checkedRadio={false}
      changeRadio={jest.fn()}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should hide modal when clicking outer div', () => {
    const hideModalFunc = jest.fn();
    const wrapper = shallow(<ModalContainer
      hideModalFunc={hideModalFunc}
      checkedRadio={false}
      changeRadio={jest.fn()}
    />);

    wrapper.find('div div').first().simulate('click');
    expect(hideModalFunc).toHaveBeenCalled();
  });

  it('should hide modal when clicking X', () => {
    const hideModalFunc = jest.fn();
    const wrapper = shallow(<ModalContainer
      hideModalFunc={hideModalFunc}
      checkedRadio={false}
      changeRadio={jest.fn()}
    />);
    wrapper.find('div > div > div > div > button').first().simulate('click');
    expect(hideModalFunc).toHaveBeenCalled();
  });

  it('should have 3 Modal Buttons', () => {
    const hideModalFunc = jest.fn();
    const wrapper = shallow(<ModalContainer
      hideModalFunc={hideModalFunc}
      checkedRadio={false}
      changeRadio={jest.fn()}
    />);
    const parentButtons = wrapper.find('ModalButton');
    expect(parentButtons.length).toBe(3);
  });
});
