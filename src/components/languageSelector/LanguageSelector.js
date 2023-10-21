import React, { useContext, useRef, useState, useEffect } from "react";

import styles from "./languageSelector.module.scss";

import { languageOptions } from "../../languages";
import { LanguageContext } from "../../containers/Language";

export default function LanguageSelector({sidebar}) {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const langChange = (id) => {
    userLanguageChange(id);
      window.location.reload();

    if (sidebar) {
      back();
    }
  };

  const back = () => {
    window.history.back();
  };

  const [langDrop, setLangDrop] = useState(false);
  const langDropRef = useRef();
  function langDropOpenClose() {
    setLangDrop(!langDrop);
  }
  useEffect(() => {
    let langDropHandler = (e) => {
      if (!langDropRef.current.contains(e.target)) {
        setLangDrop(false);
      }
    };

    document.addEventListener("mousedown", langDropHandler);

    return () => {
      document.removeEventListener("mousedown", langDropHandler);
    };
  });

  return (
    <>
      <div className={styles.lang_provider} ref={langDropRef}>
        <span
          className={`${styles.current_lang} ${langDrop ? styles.active : ""}`}
          onClick={langDropOpenClose}
        >
          {languageOptions[userLanguage]}
          <svg
            width="6"
            height="6"
            viewBox="0 0 4 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.86603 3.5C2.48113 4.16667 1.51887 4.16667 1.13397 3.5L0.267949 2C-0.116951 1.33333 0.364174 0.5 1.13397 0.5L2.86602 0.5C3.63583 0.5 4.11695 1.33333 3.73205 2L2.86603 3.5Z"
              fill="#E95258"
            />
          </svg>
        </span>
        <div className={`${styles.dropdown} ${langDrop ? styles.active : ""}`}>
          {Object.entries(languageOptions).map(([id, name]) => (
            <span
              onClick={() => langChange(id)}
              key={id}
              className={`${styles.lang_option} ${
                id === userLanguage ? styles.choosen : ""
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
