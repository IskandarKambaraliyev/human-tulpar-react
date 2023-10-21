import { useContext } from "react";

import styles from "./findUs.module.scss";

import { LanguageContext } from "../../containers/Language";

import bgImg from "../../assets/images/findUs/header-bg.png";

const FindUs = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div className={styles.findUs}>
            <div className={styles.bg_img}>
                <img src={bgImg} alt="" />
            </div>
            <div className={`${styles.container} ${styles.findUs_container}`}>
                <h2 className={styles.section_title}>{dictionary.findUS.title}</h2>
            </div>
        </div>
    );
};


export default FindUs;
