import { useContext } from "react";

import styles from "./recommends.module.scss";
import AutoPlay from "./Slider";

import { LanguageContext } from "../../containers/Language";

const Recommends = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div className={styles.recommends}>
      <div className={`${styles.container} ${styles.recommends_container}`}>
        <h2 className={styles.section_title}>{dictionary.recommends.title}</h2>
        <AutoPlay />
      </div>
    </div>
  );
};

export default Recommends;
