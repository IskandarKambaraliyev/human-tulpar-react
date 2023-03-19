import { useContext } from "react";

import styles from "./header.module.scss";

import { LanguageContext } from "../../../../containers/Language";

const Header = () => {
  const { dictionary } = useContext(LanguageContext);
  const data = dictionary.cardio.header;
  return (
    <div className={styles.header}>
      <div className={styles.bg_img}>
        <img src={data.bgImg} alt="" />
      </div>
      <div className={`${styles.container} ${styles.header_container}`}>
        <h2 className={styles.section_title}>{data.title}</h2>
        <div className={styles.info}>
          {data.texts.map((item, index) => (
            <p className={styles.text} key={index}>
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
