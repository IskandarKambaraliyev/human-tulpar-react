import { useContext, useEffect, useState } from "react";

import styles from "./ourServices.module.scss";

import { LanguageContext } from "../../../../containers/Language";
import { Link } from "react-router-dom";

import CardSkeleton, { Rect, Text } from "../../../../containers/skeleton/Skeleton";

const OurServices = () => {
  const { dictionary } = useContext(LanguageContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setData(dictionary);
    }, 2000);
  }, [dictionary]);
  return (
    <div className={styles.ourServices}>
      <div className={`${styles.container} ${styles.ourServices_container}`}>
        <h2 className={styles.section_title}>
          {dictionary.home.ourServices.title}
        </h2>
        {data ? (
          <div className={styles.services}>
            {Object.keys(dictionary.home.ourServices.services).map(
              (item, i) => (
                <div className={styles.service_wrapper}>
                  <div className={styles.service}>
                    <div className={styles.bg_img}>
                      <img
                        src={dictionary.home.ourServices.services[item].imgSrc}
                        alt=""
                      />
                    </div>
                    <h4 className={styles.service_title}>
                      {dictionary.home.ourServices.services[item].title}
                    </h4>
                  </div>
                  <div className={styles.service_info}>
                    <div className={styles.icon_wrapper}>
                      {dictionary.home.ourServices.services[item].icon}
                    </div>
                    <div className={styles.content}>
                      <h4 className={styles.content_title}>
                        {dictionary.home.ourServices.services[item].title}
                      </h4>
                      <p className={styles.content_text}>
                        {dictionary.home.ourServices.services[item].text}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ) : (
          <CardSkeleton style={{ margin: "50px 0" }}>
            <Rect style={{minHeight: "250px"}}/>
            <Text />
          </CardSkeleton>
        )}
        <Link preventScrollReset={true} reloadDocument
          className={`${styles.link_btn} ${styles.btn_light}`}
          to="/services"
        >
          {dictionary.home.ourServices.btn}
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
