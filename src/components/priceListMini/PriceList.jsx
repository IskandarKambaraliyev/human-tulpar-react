import { useContext, useState } from "react";

import styles from "./priceList.module.scss";

import { LanguageContext } from "../../containers/Language";

import Line from "../../containers/sectionBgLines/Line";

import { BsArrowUpShort as ArrowIcon } from "react-icons/bs";

const PriceList = () => {
  const { dictionary } = useContext(LanguageContext);

  const [serviceList, setServiceList] = useState(4);
  const [btnActive, setBtnActive] = useState(false);

  const btnFull = () => {
    setServiceList(1000);
    setBtnActive(true);
  };
  const btnLess = () => {
    setServiceList(4);
    setBtnActive(false);
  };
  return (
    <div className={styles.priceList}>
      <Line />
      <div className={`${styles.container} ${styles.priceList_container}`}>
        <h2 className={styles.section_title}>{dictionary.priceList.title}</h2>
        <div className={styles.priceList_wrapper}>
          <div className={styles.priceLists}>
            <div className={styles.list_info_wrapper}>
              <div className={styles.list_info}>
                {dictionary.priceList.listInfo.info1}
              </div>
              <div className={styles.list_info}>
                {dictionary.priceList.listInfo.info2}
              </div>
            </div>
            <div className={styles.lists}>
              {Object.keys(dictionary.priceList.lists).map((service, i) =>
                Object.keys(dictionary.priceList.lists[service]).map(
                  (list, b) =>
                    b < serviceList && b % 2 === 0 ? (
                      <div key={b} className={styles.list}>
                        <div className={styles.list_name}>
                          {dictionary.priceList.lists[service][list].name}
                        </div>
                        <div className={styles.list_price}>
                          {dictionary.priceList.lists[service][list].price}
                        </div>
                      </div>
                    ) : null
                )
              )}
            </div>
          </div>
          <div className={styles.priceLists}>
            <div className={styles.list_info_wrapper}>
              <div className={styles.list_info}>
                {dictionary.priceList.listInfo.info1}
              </div>
              <div className={styles.list_info}>
                {dictionary.priceList.listInfo.info2}
              </div>
            </div>
            <div className={styles.lists}>
              {Object.keys(dictionary.priceList.lists).map((service, i) =>
                Object.keys(dictionary.priceList.lists[service]).map(
                  (list, b) =>
                    b < serviceList && b % 2 === 1 ? (
                      <div key={b} className={styles.list}>
                        <div className={styles.list_name}>
                          {dictionary.priceList.lists[service][list].name}
                        </div>
                        <div className={styles.list_price}>
                          {dictionary.priceList.lists[service][list].price}
                        </div>
                      </div>
                    ) : null
                )
              )}
            </div>
          </div>
        </div>
        <button
          className={`${styles.link_btn} ${!btnActive ? styles.active : ""}`}
          onClick={btnFull}
        >
          {dictionary.priceList.btn}
        </button>
        <button
          className={`${styles.link_btn} ${btnActive ? styles.active : ""}`}
          onClick={btnLess}
        >
          <ArrowIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default PriceList;
