import { useContext, useState } from "react";

import styles from "./servicesPriceList.module.scss";

import { LanguageContext } from "../../../../containers/Language";

const ServicesPriceList = () => {
  const { dictionary } = useContext(LanguageContext);
  const data = dictionary.priceList;

  const [filter, setFilter] = useState("all");
  const filterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className={styles.servicesPriceList}>
      <div
        className={`${styles.container} ${styles.servicesPriceList_container}`}
      >
        <h2 className={styles.section_title}>{data.title}</h2>
        <div className={styles.priceList}>
          <div className={styles.priceList_filter_wrapper}>
            {data.list_filter.map((item, index) => (
              <div
                key={index}
                onClick={() => filterChange(item.filter)}
                className={`${styles.filter} ${filter === item.filter ? styles.active : ""}`}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className={styles.priceList_wrapper}>
            {filter === "all" ? (
              <>
                <div className={styles.priceLists}>
                  <div className={styles.list_info_wrapper}>
                    {Object.keys(data.listInfo).map((item, index) => (
                      <div key={index} className={styles.list_info}>
                        {data.listInfo[item]}
                      </div>
                    ))}
                  </div>
                  <div className={styles.lists}>
                    {Object.keys(dictionary.priceList.lists).map((service, i) =>
                      Object.keys(dictionary.priceList.lists[service]).map(
                        (list, b) =>
                          b % 2 === 0 ? (
                            <div key={b} className={styles.list}>
                              <div className={styles.list_name}>
                                {dictionary.priceList.lists[service][list].name}
                              </div>
                              <div className={styles.list_price}>
                                {
                                  dictionary.priceList.lists[service][list]
                                    .price
                                }
                              </div>
                            </div>
                          ) : null
                      )
                    )}
                  </div>
                </div>
                <div className={styles.priceLists}>
                  <div className={styles.list_info_wrapper}>
                    {Object.keys(data.listInfo).map((item, index) => (
                      <div key={index} className={styles.list_info}>
                        {data.listInfo[item]}
                      </div>
                    ))}
                  </div>
                  <div className={styles.lists}>
                    {Object.keys(dictionary.priceList.lists).map((service, i) =>
                      Object.keys(dictionary.priceList.lists[service]).map(
                        (list, b) =>
                          b % 2 === 1 ? (
                            <div key={b} className={styles.list}>
                              <div className={styles.list_name}>
                                {dictionary.priceList.lists[service][list].name}
                              </div>
                              <div className={styles.list_price}>
                                {
                                  dictionary.priceList.lists[service][list]
                                    .price
                                }
                              </div>
                            </div>
                          ) : null
                      )
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.priceLists}>
                  <div className={styles.list_info_wrapper}>
                    {Object.keys(data.listInfo).map((item, index) => (
                      <div key={index} className={styles.list_info}>
                        {data.listInfo[item]}
                      </div>
                    ))}
                  </div>
                  <div className={styles.lists}>
                  {Object.keys(data.lists[filter]).map((item, index) =>
                      index % 2 === 0 ? <div key={index} className={styles.list}>
                        <div className={styles.list_name}>
                            {data.lists[filter][item].name}
                        </div>
                        <div className={styles.list_price}>
                            {data.lists[filter][item].price}
                        </div>
                      </div> : null
                    )}
                  </div>
                </div>
                <div className={styles.priceLists}>
                  <div className={styles.list_info_wrapper}>
                    {Object.keys(data.listInfo).map((item, index) => (
                      <div key={index} className={styles.list_info}>
                        {data.listInfo[item]}
                      </div>
                    ))}
                  </div>
                  <div className={styles.lists}>
                    {Object.keys(data.lists[filter]).map((item, index) =>
                      index % 2 === 1 ? <div key={index} className={styles.list}>
                        <div className={styles.list_name}>
                            {data.lists[filter][item].name}
                        </div>
                        <div className={styles.list_price}>
                            {data.lists[filter][item].price}
                        </div>
                      </div> : null
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPriceList;
