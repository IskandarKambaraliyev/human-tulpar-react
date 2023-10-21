import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import styles from "./ourNews.module.scss";

import { LanguageContext } from "../../../../containers/Language";

import CardSkeleton, {
  Rect,
  Text,
} from "../../../../containers/skeleton/Skeleton";

const OurNews = () => {
  const { dictionary } = useContext(LanguageContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(dictionary.news.newsImages);
    }, 2000);
  }, [dictionary]);
  // const data = dictionary.news.newsImages;
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(4);
  const [filter, setFilter] = useState("all");
  const [expandedCards, setExpandedCards] = useState([]);

  const handleShowMore = (id) => {
    setExpandedCards((prev) => [...prev, id]);
  };

  const filteredData =
    filter === "all" ? data : data.filter((item) => item.type === filter);

  return (
    <div className={styles.ourNews}>
      <div className={`${styles.container} ${styles.ourNews_container}`}>
        <h2 className={styles.section_title}>
          {dictionary.home.ourNews.title}
        </h2>
        <div className={styles.news_wrapper}>
          <div className={styles.news_filter}>
            {dictionary.news.newsFilter.map((item, i) => (
              <div
                key={i}
                className={`${styles.filter} ${
                  filter === item.filter ? styles.active : ""
                }`}
                onClick={() => setFilter(item.filter)}
              >
                {item.name}
              </div>
            ))}
          </div>
          {data ? (
            <div className={styles.gallery_wrapper}>
              {filteredData.slice(0, visible).map((item, id) => (
                <div key={id} className={styles.new}>
                  <div className={styles.image}>
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.back}></div>
                    <div className={styles.info}>
                      <h4 className={styles.info_title}>{item.title}</h4>
                      <p className={styles.info_text}>
                        {expandedCards.includes(item.id)
                          ? item.text
                          : `${item.text.substring(0, 50)}...`}{" "}
                      </p>
                      {!expandedCards.includes(item.id) && (
                        <button
                          className={styles.info_btn}
                          onClick={() => handleShowMore(item.id)}
                        >
                          Show More
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <CardSkeleton style={{ margin: "50px 0" }}>
              <Rect />
              <Text
                inside="bottom"
                style={{ bottom: "3rem", minHeight: "2rem" }}
              />
              <Text inside="bottom" style={{ bottom: "6rem" }} />
              <Text inside="bottom" style={{ bottom: "1rem", maxWidth: "120px" }} />
            </CardSkeleton>
          )}
        </div>
        <Link preventScrollReset={true} reloadDocument className={styles.link_btn} to={dictionary.home.ourNews.btn.link}>
          {dictionary.home.ourNews.btn.name}
        </Link>
      </div>
    </div>
  );
};

export default OurNews;
