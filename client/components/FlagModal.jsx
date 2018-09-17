import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Review.css';


const FlagModal = ({ show }) => {
  return (
    <div className={show ? styles.modalYes : styles.modalNone}>
      <section className={styles.modalMain}>
        <button type="button" onClick={()=>console.log('clicking')}>HERE IS A MODAL</button>
      </section>
    </div>
  );
};

export default FlagModal;
