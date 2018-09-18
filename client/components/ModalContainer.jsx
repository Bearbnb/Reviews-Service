import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalButton from './ModalButton.jsx';
import styles from '../../styles/FlagModal.css';


const ModalContainer = ({ hideModalFunc, checkedRadio, changeRadio }) => (
  <div>
    <div className={styles.modalOverlay} onClick={() => hideModalFunc()} />
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <button
            type="button"
            onClick={() => hideModalFunc()}
          >
            <i className="fas fa-times" />
          </button>
          <h1>Do you want to anonymously report this review?</h1>
        </div>
        <div className={styles.FlagText}>
            If so, please choose one of the following reasons
        </div>
        <div className={styles.FlagButtons}>
          <ModalButton
            header="Inappropriate Content"
            content="This review contains violent, graphic, promotional, or otherwise offensive content."
            changeRadio={changeRadio}
          />
          <ModalButton
            header="Dishonest or hateful content"
            content="This review is purposefully malicious and assaulting."
            changeRadio={changeRadio}
          />
          <ModalButton 
          header="Fake content" 
          content="This review contains false information or may be fake." 
          changeRadio={changeRadio}
          />
        </div>
        <button
          type="button"
          className={checkedRadio ? styles.FlagSubmit : styles.FlagSubmitHide}
        >Submit
        </button>
      </div>
    </div>


  </div>
);

export default ModalContainer;
