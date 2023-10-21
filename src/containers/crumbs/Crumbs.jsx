import { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import styles from "./crumbs.module.scss";

import { LanguageContext } from "../Language";

const Crumbs = () => {
  const { dictionary } = useContext(LanguageContext);
  const { id } = useParams();
  const card = dictionary.news.newsImages.find((c) => c.id === Number(id));
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className={styles.crumb} key={crumb}>
          <Link reloadDocument preventScrollReset={true} to={currentLink}>
            {crumb === id ? card.title : crumb}
          </Link>
        </div>
      );
    });
  return (
    <div className={styles.breadcrumbs}>
      <div className={`${styles.container} ${styles.breadcrumbs_container}`}>
        {crumbs}
      </div>
    </div>
  );
};

export default Crumbs;
