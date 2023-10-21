import { useContext } from "react";

import styles from "./cardioPriceList.module.scss";

import { LanguageContext } from "../../../../containers/Language";

const CardioPriceList = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div className={styles.cardioPriceList}>
      <div
        className={`${styles.container} ${styles.cardioPriceList_container}`}
      >
        <h2 className={styles.section_title}>{dictionary.priceList.title}</h2>
        <div className={styles.priceList_wrapper}>
          <div className={styles.priceLists}>
            <div className={styles.list_info_wrapper}>
              {Object.keys(dictionary.priceList.listInfo).map((item, index) => (
                <div key={index} className={styles.list_info}>
                  {dictionary.priceList.listInfo[item]}
                </div>
              ))}
            </div>
            <div className={styles.lists}>
              {Object.keys(dictionary.priceList.lists.cardio).map(
                (item, index) =>
                  index % 2 === 0 ? (
                    <div key={index} className={styles.list}>
                      <div className={styles.list_name}>
                        {dictionary.priceList.lists.cardio[item].name}
                      </div>
                      <div className={styles.list_price}>
                        {dictionary.priceList.lists.cardio[item].price}
                      </div>
                    </div>
                  ) : null
              )}
            </div>
          </div>
          <div className={styles.priceLists}>
            <div className={styles.list_info_wrapper}>
              {Object.keys(dictionary.priceList.listInfo).map((item, index) => (
                <div key={index} className={styles.list_info}>
                  {dictionary.priceList.listInfo[item]}
                </div>
              ))}
            </div>
            <div className={styles.lists}>
              {Object.keys(dictionary.priceList.lists.cardio).map(
                (item, index) =>
                  index % 2 === 1 ? (
                    <div key={index} className={styles.list}>
                      <div className={styles.list_name}>
                        {dictionary.priceList.lists.cardio[item].name}
                      </div>
                      <div className={styles.list_price}>
                        {dictionary.priceList.lists.cardio[item].price}
                      </div>
                    </div>
                  ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardioPriceList;
