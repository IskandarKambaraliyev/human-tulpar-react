import React from 'react';

import styles from "./information.module.scss";

const Information = (props) => {
  return (
    <div className={styles.information}>
        <div className={`${styles.container} ${styles.information_container}`}>
            <div className={styles.image}>
                <img src={props.imgSrc} alt="" />
            </div>
            <div className={styles.content}>
                <h4 className={styles.card_title}>{props.title}</h4>
                <p className={styles.card_text}>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Information