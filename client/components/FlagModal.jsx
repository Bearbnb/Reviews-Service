import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Review.css';


const FlagModal = ({ handleClose, show, children }) => {
    return (
        <div className={show ? "modal display-block" : "modal display-none"}>
            <section className={styles.modalMain}>
                {children}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );
};

export default FlagModal;
