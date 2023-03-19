import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageProvider';
import "./language.scss";


export default function Language ({ className }) {
    const currentLang = window.localStorage.getItem("lang");
    const [languageState, setLanguageState] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [lang, setLang] = useLang();
    const [language, setLanguage] = useState(currentLang === "ru" ? "Russian" : "English");

    const handleClick = (lang) => {
        setLang(lang);
        setLanguageState(false);
        setLanguage(lang === "ru" ? "Russian" : "English");
    }
    
    let languageRef = useRef();
    useEffect(() => {
        let languageHandler = (e) => {
            if(!languageRef.current.contains(e.target)){
                setLanguageState(false);
            }
        };

        document.addEventListener("mousedown", languageHandler);

        return() => {
            document.removeEventListener("mousedown", languageHandler)
        }
    });
  return (
    <div className={`${"lang_wrapper"} ${className}`} ref={languageRef}>
        <button className={"main_btn"} onClick={() => setLanguageState(!languageState)}>
            <span>
                {language === "Russian" ? "Рус" : "En"}
            </span>
            <div className={`${"icon"} ${languageState ? "active" : ""}`}>
                <svg width="6" height="6" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.86603 3.5C2.48113 4.16667 1.51887 4.16667 1.13397 3.5L0.267949 2C-0.116951 1.33333 0.364174 0.5 1.13397 0.5L2.86602 0.5C3.63583 0.5 4.11695 1.33333 3.73205 2L2.86603 3.5Z" fill="#E95258"/>
                </svg>
            </div>

            <div className={`${"lang_holder"} ${languageState ? "lang_show" : ""}`}>
                <button className={`${"lang_item"} ${language === "Russian" ? "choosen" : ""}`}
                onClick={handleClick.bind(null, "ru")}>
                    Рус
                </button>

                <button className={`${"lang_item"} ${language === "English" ? "choosen" : ""}`}
                onClick={handleClick.bind(null, "en")}>
                    En
                </button>
            </div>
        </button>
    </div>
  )
}