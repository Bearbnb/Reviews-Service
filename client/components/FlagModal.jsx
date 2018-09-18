import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalContainer from './ModalContainer.jsx';

class FlagModal extends React.Component {
  constructor(props) {
    super(props);
    this.changeRadio = this.changeRadio.bind(this);
    this.state = {
      checkedRadio: false,
    };
  }

  changeRadio() {
    this.setState({
      checkedRadio: true,
    });
  }

  render() {
    const { showModal, hideModalFunc } = this.props;
    const { checkedRadio } = this.state;
    return (showModal ? (
      <ModalContainer
        hideModalFunc={hideModalFunc}
        changeRadio={this.changeRadio}
        checkedRadio={checkedRadio}
      />
    ) : <div />);
  }
}
FlagModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  hideModalFunc: PropTypes.func.isRequired,
};
export default FlagModal;
