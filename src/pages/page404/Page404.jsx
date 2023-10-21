import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./page404.module.scss";

import { TbError404 as Icon404 } from "react-icons/tb";

import { LanguageContext } from "../../containers/Language";

const Page404 = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div className={styles.page}>
      <div className={styles.page_wrapper}>
        <Icon404 className={styles.icon} />
        <h1 className={styles.title}>{dictionary.page404.title}</h1>
        <Link preventScrollReset={true} reloadDocument to="/" className={styles.link}>{dictionary.page404.link}</Link>
      </div>
    </div>
  );
};

export default Page404;
