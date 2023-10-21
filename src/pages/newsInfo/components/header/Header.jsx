import React from 'react';

import styles from "./header.module.scss";

const Header = (props) => {
  return (
    <div className={styles.header}>
        <div className={styles.bg_image}>
            <img src={props.imgSrc} alt="" />
        </div>
        <div className={`${styles.container} ${styles.header_container}`}>
            <h2 className={styles.section_title}>{props.title}</h2>
        </div>
    </div>
  )
}

export default Header