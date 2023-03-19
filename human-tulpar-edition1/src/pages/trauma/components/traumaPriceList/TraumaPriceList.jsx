import { useContext } from "react";

import styles from "./traumaPriceList.module.scss";

import { LanguageContext } from "../../../../containers/Language";

const TraumaPriceList = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div className={styles.traumaPriceList}>
      <div
        className={`${styles.container} ${styles.traumaPriceList_container}`}
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
              {Object.keys(dictionary.priceList.lists.trauma).map(
                (item, index) =>
                  index % 2 === 0 ? (
                    <div key={index} className={styles.list}>
                      <div className={styles.list_name}>
                        {dictionary.priceList.lists.trauma[item].name}
                      </div>
                      <div className={styles.list_price}>
                        {dictionary.priceList.lists.trauma[item].price}
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
              {Object.keys(dictionary.priceList.lists.trauma).map(
                (item, index) =>
                  index % 2 === 1 ? (
                    <div key={index} className={styles.list}>
                      <div className={styles.list_name}>
                        {dictionary.priceList.lists.trauma[item].name}
                      </div>
                      <div className={styles.list_price}>
                        {dictionary.priceList.lists.trauma[item].price}
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

export default TraumaPriceList;
