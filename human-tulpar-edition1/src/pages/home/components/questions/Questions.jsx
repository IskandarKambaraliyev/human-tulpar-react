import { useContext, useState } from "react";

import styles from "./questions.module.scss";

import { LanguageContext } from "../../../../containers/Language";

const Questions = () => {
  const { dictionary } = useContext(LanguageContext);

  const [activeQuestion, setActiveQuestion] = useState(0);

  const handleSelect = (index) => {
    setActiveQuestion(index);
  };
  return (
    <div className={styles.questions}>
      <div className={styles.title_wrapper}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>
            {dictionary.home.questionsConponent.title}
          </h2>
        </div>
      </div>
      <div className={`${styles.container} ${styles.questions_container}`}>
        <div className={styles.question_wrapper}>
          {dictionary.home.questionsConponent.questions.map((item, index) => (
            <div
              className={`${styles.question} ${
                index === activeQuestion ? styles.active : ""
              }`}
              key={index}
              onClick={() => handleSelect(index)}
            >
              <h4 className={styles.question_title}>{item.question}</h4>
              <div className={styles.icon_wrapper}>
                {dictionary.home.questionsConponent.icon}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.answer_wrapper}>
          <div className={styles.answer_title}>
            {dictionary.home.questionsConponent.answerText}
          </div>
          <div className={styles.answer}>
            {dictionary.home.questionsConponent.questions[activeQuestion] &&
              dictionary.home.questionsConponent.questions[activeQuestion]
                .answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
