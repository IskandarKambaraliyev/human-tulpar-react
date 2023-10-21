import { useContext, useEffect, useState } from 'react';

import styles from "./ourServices.module.scss";

import { LanguageContext } from '../../../../containers/Language';
import CardSkeleton, { Rect, Text } from '../../../../containers/skeleton/Skeleton';

const Ourservices = () => {
  const { dictionary } = useContext(LanguageContext);
  // const data = dictionary.services.ourServices;
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(dictionary.services.ourServices);
    }, 2000);
  })

  return (
    <div className={styles.ourServices}>
      <div className={`${styles.container} ${styles.ourServices_container}`}>
        {data ? <div className={styles.cards}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.back}>
                <div className={styles.image_wrapper}>
                  <img src={item.imgSrc} alt="" />
                </div>
                <h4 className={styles.card_title}>{item.title}</h4>
              </div>
              <div className={styles.front}>
                <div className={styles.icon_wrapper}>
                  {item.icon}
                </div>
                <div className={styles.content}>
                  <h4 className={styles.content_title}>{item.title}</h4>
                  <p className={styles.content_text}>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div> : <CardSkeleton style={{padding: "1rem 0"}} >
          <Rect style={{minHeight: "calc(300px - 2rem)"}} />
          <Text inside="bottom" />
          </CardSkeleton>}
      </div>
    </div>
  )
}

export default Ourservices