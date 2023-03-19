import { useContext, useEffect, useState } from "react";
import { Text, ContentSkeleton } from "../../../../containers/skeleton/Skeleton";

// Importing Styles
import styles from "./header.module.scss";
//

import { LanguageContext } from "../../../../containers/Language";

import ScrollBottom from "../../../../containers/scrollBottom/ScrollBottom";

// Importing Images
import leftImg from "../../../../assets/images/home/header/left-img.png";
import rightImg from "../../../../assets/images/home/header/right-img.png";
//

import { BiCircle as CircleIcon } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const { dictionary } = useContext(LanguageContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(dictionary);
    }, 2000);
  }, [dictionary]);
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        {data ? (
          <>
            <div className={styles.bg_img}>
              <img src={leftImg} alt="" />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>
                {data.home.header.left.title}
              </h2>
              <p className={styles.subtitle}>
                {data.home.header.left.subtitle}
              </p>
              <div className={styles.services}>
                {Object.keys(data.home.header.left.services).map(
                  (item, i) => (
                    <div key={i} className={styles.service}>
                      {data.home.header.left.services[item].name}
                      <CircleIcon className={styles.icon} />
                    </div>
                  )
                )}
                <Link reloadDocument preventScrollReset={true}
                  className={`${styles.link_btn} ${styles.btn_light}`}
                  to="/cardio"
                >
                  {data.home.header.left.btn}
                </Link>
              </div>
            </div>
          </>
        ) : (
          <ContentSkeleton >
            <Text style={{minHeight: "2rem"}} />
            <Text style={{width: "70%", marginLeft: "auto", minHeight: "100px"}} />
            <Text style={{width: "250px", marginLeft: "auto"}} />
            <Text style={{width: "250px", marginLeft: "auto"}} />
            <Text style={{width: "250px", marginLeft: "auto"}} />
            <Text style={{width: "250px", marginLeft: "auto"}} />
            <Text style={{borderRadius: "50px", marginLeft: "auto", padding: "2rem 4.25rem", width: "30px"}} />
          </ContentSkeleton>
        )}
      </div>
      <div className={styles.right}>
        {data ? (
          <>
            <div className={styles.bg_img}>
              <img src={rightImg} alt="" />
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>
                {data.home.header.right.title}
              </h2>
              <p className={styles.subtitle}>
                {data.home.header.right.subtitle}
              </p>
              <div className={styles.services}>
                {Object.keys(data.home.header.right.services).map(
                  (item, i) => (
                    <div key={i} className={styles.service}>
                      {data.home.header.right.services[item].name}
                      <CircleIcon className={styles.icon} />
                    </div>
                  )
                )}
                <Link reloadDocument preventScrollReset={true} className={styles.link_btn} to="/trauma">
                  {data.home.header.right.btn}
                </Link>
              </div>
            </div>
          </>
        ) : (
          <ContentSkeleton >
            <Text style={{minHeight: "2rem"}} />
            <Text style={{width: "70%", marginRight: "auto", minHeight: "100px"}} />
            <Text style={{width: "250px", marginRight: "auto"}} />
            <Text style={{width: "250px", marginRight: "auto"}} />
            <Text style={{width: "250px", marginRight: "auto"}} />
            <Text style={{width: "250px", marginRight: "auto"}} />
            <Text style={{borderRadius: "50px", marginRight: "auto", padding: "2rem 4.25rem", width: "30px"}} />
          </ContentSkeleton>
        )}
      </div>
      <ScrollBottom />
    </div>
  );
};

export default Header;
