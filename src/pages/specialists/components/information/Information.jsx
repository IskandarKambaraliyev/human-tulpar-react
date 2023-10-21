import { useContext, useEffect, useState } from "react";

import styles from "./information.module.scss";

import { LanguageContext } from "../../../../containers/Language";

import ContentSkeleton, {
  Circle,
  Text,
} from "../../../../containers/skeleton/Skeleton";

const Information = () => {
  const { dictionary } = useContext(LanguageContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(dictionary.specialists.information);
    }, 2000);
  }, [dictionary]);

  const [filter, setFilter] = useState(1);

  const filterChange = (id) => {
    setFilter(id);
  };
  return (
    <div className={styles.information}>
      <div className={`${styles.container} ${styles.information_container}`}>
        {data ? (
          <>
            <div className={styles.filter_wrapper}>
              {Object.keys(data.specialists).map((item, index) => (
                <div
                  className={`${styles.filter} ${
                    filter === data.specialists[item].id ? styles.active : ""
                  }`}
                  key={data.specialists[item].id}
                  onClick={() => filterChange(data.specialists[item].id)}
                  title={data.specialists[item].name}
                >
                  <div className={styles.image_wrapper}>
                    <img src={data.specialists[item].imgSrc} alt="" />
                  </div>

                  <h4 className={styles.name}>{data.specialists[item].name}</h4>
                </div>
              ))}
            </div>
            <div className={styles.specialists}>
              {Object.keys(data.specialists).map((item, index) =>
                filter === data.specialists[item].id ? (
                  <div
                    className={styles.specialist}
                    key={data.specialists[item].id}
                  >
                    <div className={styles.specialist_info_wrapper}>
                      <div className={styles.info}>
                        {data.specialist_info.name}
                      </div>
                      <div className={styles.content}>
                        {data.specialists[item].name}
                      </div>
                    </div>
                    <div className={styles.specialist_info_wrapper}>
                      <div className={styles.info}>
                        {data.specialist_info.job}
                      </div>
                      <div className={styles.content}>
                        {data.specialists[item].job}
                      </div>
                    </div>
                    <div className={styles.specialist_info_wrapper}>
                      <div className={styles.info}>
                        {data.specialist_info.specialization}
                      </div>
                      <div className={styles.content}>
                        {data.specialists[item].specialization}
                      </div>
                    </div>
                    <div className={styles.specialist_info_wrapper}>
                      <div className={styles.info}>
                        {data.specialist_info.career}
                      </div>
                      <ul className={styles.specialist_info_list}>
                        {data.specialists[item].career.lists.map((list, id) => (
                          <li className={styles.item} key={id}>
                            {list.item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.specialist_info_wrapper}>
                      <div className={styles.info}>
                        {data.specialist_info.scientificActivity}
                      </div>
                      <ul className={styles.specialist_info_list}>
                        {data.specialists[item].scientificActivity.lists.map(
                          (list, id) => (
                            <li className={styles.item} key={id}>
                              {list.item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </>
        ) : (
          <ContentSkeleton style={{minHeight: "500px"}}>
            <Circle />
            <Text style={{maxWidth: "120px", margin: "1rem 0 0 1rem", marginLeft: "1rem"}} />
            <Text style={{marginTop: "3rem"}} />
            <Text />
            <Text />
            <Text />
          </ContentSkeleton>
        )}
      </div>
    </div>
  );
};

export default Information;
