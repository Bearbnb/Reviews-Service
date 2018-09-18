import React from 'react';
import ReactDOM from 'react-dom';
import ModalContainer from './ModalContainer.jsx';
import styles from '../../styles/FlagModal.css';


class FlagModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedRadio: null,
    };
  }

  changeRadio() {
    this.setState({
      checkedRadio: true,
    });
  }

  render() {
    const { showModal } = this.props;
    const { hideModalFunc } = this.props;
    const { checkedRadio } = this.state;
    return (showModal ? (
      <ModalContainer
        hideModalFunc={hideModalFunc}
        changeRadio={this.changeRadio.bind(this)}
        checkedRadio={checkedRadio}
      />
    ) : <div />);
  }
}

export default FlagModal;
