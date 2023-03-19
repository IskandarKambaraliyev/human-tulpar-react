import { useContext } from 'react';

import styles from "./information.module.scss";

import { LanguageContext } from '../../../../containers/Language';

const Information = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div className={styles.information}>
      <div className={styles.left}>
        <img src={dictionary.trauma.information.left} alt="" />
      </div>
      <div className={styles.main}>
        <div className={styles.info}>
          {dictionary.trauma.information.main.texts.map((item, index) => (
            <p key={index} className={styles.text}>
              {item.text}
            </p>
          ))}
        </div>
        <div className={styles.info}>
          <p className={styles.list_title}>
            {dictionary.trauma.information.main.lists.listTitle}
          </p>
          <ul className={styles.lists_list}>
            {dictionary.trauma.information.main.lists.list.map(
              (item, index) => (
                <li key={index} className={styles.lists_item}>
                  {item.text}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <img src={dictionary.trauma.information.right} alt="" />
      </div>
    </div>
  );
};

export default Information;
