import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./information.module.scss";

import { LanguageContext } from "../../../../containers/Language";

const Information = () => {
  const { dictionary } = useContext(LanguageContext);

  const [newsFilter, setNewsFilter] = useState("all");

  const filteredNews =
    newsFilter === "all"
      ? dictionary.news.newsImages.filter((item) => item.type === "news")
      : dictionary.news.newsImages.filter(
          (item) => item.character === newsFilter && item.type === "news"
        );

  const newsFilterChange = (filter) => {
    setNewsFilter(filter);
  };

  const [adviceFilter, setAdviceFilter] = useState("all");

  const filteredAdvice =
    adviceFilter === "all"
      ? dictionary.news.newsImages.filter((item) => item.type === "advice")
      : dictionary.news.newsImages.filter(
          (item) => item.character === adviceFilter && item.type === "advice"
        );

  const adviceFilterChange = (filter) => {
    setAdviceFilter(filter);
  };
  return (
    <div className={styles.information}>
      <div className={styles.cards}>
        <div className={styles.filter_wrapper}>
          <div className={styles.container}>
            {dictionary.newsPage.information.filters.map((item, index) => (
              <div
                className={`${styles.filter} ${
                  newsFilter === item.filter ? styles.active : ""
                }`}
                key={index}
                onClick={() => newsFilterChange(item.filter)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.container} ${styles.cards_container}`}>
          <div className={styles.cards_wrapper}>
            {filteredNews.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.card_image}>
                  <img src={item.imgSrc} alt="" />
                </div>
                <div className={styles.card_content}>
                  <h4 className={styles.card_title}>{item.title}</h4>
                  <p className={styles.card_text}>{item.text}</p>
                  <Link
                    to={`/news/${item.id}`}
                    className={styles.card_btn}
                    reloadDocument
                    preventScrollReset={true}
                  >
                    {dictionary.news.textBtn.show}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.filter_wrapper}>
          <div className={styles.container}>
            {dictionary.newsPage.information.filters.map((item, index) => (
              <div
                className={`${styles.filter} ${
                  adviceFilter === item.filter ? styles.active : ""
                }`}
                key={index}
                onClick={() => adviceFilterChange(item.filter)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.container} ${styles.cards_container}`}>
          <div className={styles.cards_wrapper}>
            {filteredAdvice.map((item, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.card_image}>
                  <img src={item.imgSrc} alt="" />
                </div>
                <div className={styles.card_content}>
                  <h4 className={styles.card_title}>{item.title}</h4>
                  <p className={styles.card_text}>{item.text}</p>
                  <Link
                    to={`/news/${item.id}`}
                    className={styles.card_btn}
                    reloadDocument
                    preventScrollReset={true}
                  >
                    {dictionary.news.textBtn.show}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
