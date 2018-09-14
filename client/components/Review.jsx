import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/Review.css';
const moment = require('moment')


const reviewWithoutComments = (props)=> (
    <div className={styles.reviewContainer}>
        <div>
            <div className={styles.mainHeader}>
                <div className={styles.imageHeader}>
                    <img className={styles.avatar} src={props.review.photo} alt="" />
                </div>
                <div className={styles.textHeader}>
                    <div className={styles.reviewer}>
                        {props.review.name}
                    </div>
                    <div className={styles.date}>
                        {moment(props.review.created).format("MMMM YYYY")}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.reviewText}>
            <p>{props.review.review}</p>
        </div>
        <div className={styles.bottom}>
            <div></div>
        </div>
    </div>
)

const reviewWithComments = (props) => (<div>
    <div className={styles.reviewContainer}>
        <div>
            <div className={styles.mainHeader}>
                <div className={styles.imageHeader}>
                    <img className={styles.avatar} src={props.review.photo} alt="" />
                </div>
                <div className={styles.textHeader}>
                    <div className={styles.reviewer}>
                        {props.review.name}
                    </div>
                    <div className={styles.date}>
                        {moment(props.review.created).format("MMMM YYYY")}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.reviewText}>
            <p>{props.review.review}</p>
        </div>

    </div>

    <div className={styles.hostContainer}>
        <div className={styles.mainHostContainer}>
            <div className={styles.hostPhoto}>
                <div className={styles.hostAvatar}>
                    <img className={styles.avatar} src={props.host.photo} alt="" />
                </div>
            </div>
            <div className={styles.hostText}>
                <div className={styles.textHostHeader}>
                    <h4>Response from {props.host.name}:</h4>
                </div>
                <p>{props.review.host_comments}</p>
                <div className={styles.hostText}>
                </div>
                <div className={styles.HostDate}>
                    {moment(props.review.created).format("MMMM YYYY")}
                </div>
            </div>
        </div>
    </div>


    <div className={styles.bottom}>
        <div></div>
    </div>
</div>
)
const Host = (props) => (
    <div className={styles.hostContainer}>
        <div className={styles.mainHostContainer}>
            <div className={styles.hostPhoto}>
                <div className={styles.hostAvatar}>
                    <img className={styles.avatar} src={props.host.photo} alt="" />
                </div>
            </div>
            <div className={styles.hostText}>
                <div className={styles.textHostHeader}>
                    <h4>Response from {props.host.name}:</h4>
                </div>
                <p>{props.review.host_comments}</p>
                <div className={styles.hostText}>
                </div>
                <div className={styles.HostDate}>
                    {moment(props.review.created).format("MMMM YYYY")}
                </div>
            </div>
        </div>
    </div>
)

let Review = (props) => {
    if (props.review.host_comments==='null'){
        return reviewWithoutComments(props)
    } else {
        return reviewWithComments(props)
    }
};

export default Review;