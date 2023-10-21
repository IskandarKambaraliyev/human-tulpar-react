import React, { useState, useEffect, useRef, useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

// Importing Styles
import styles from "./socials.module.scss";

import { LanguageContext } from "../../containers/Language";

import { BsThreeDots as BtnIcon1 } from "react-icons/bs";
import { BsWhatsapp as BtnIcon2 } from "react-icons/bs";
import { SlNote as BtnIcon3 } from "react-icons/sl";
import { BsFillTelephoneFill as BtnIcon4 } from "react-icons/bs";
import { BsInstagram as BtnIcon5 } from "react-icons/bs";
import { AiFillCloseCircle as LetterCloseIcon } from "react-icons/ai";

const Socials = () => {
  const { dictionary } = useContext(LanguageContext);

  const [socialsOpen, setSocialsOpen] = useState(false);
  const socialsRef = useRef();
  useEffect(() => {
    let socialsHandler = (e) => {
      if (!socialsRef.current.contains(e.target) && socialsOpen) {
        setSocialsOpen(false);
      }
    };

    document.addEventListener("mousedown", socialsHandler);

    return () => {
      document.removeEventListener("mousedown", socialsHandler);
    };
  }, [socialsOpen]);

  // Letter Open
  const [letterIsOpen, setLetterOpen] = useState(false);

  letterIsOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const push = () => {
    window.history.pushState(null, null);
  };

  const back = () => {
    window.history.back();
  };
  const letterRef = useRef();
  const handleLetterOpen = () => {
    setLetterOpen(true);
    window.history.pushState(null, null);
    push();
    setSocialsOpen(false);
  };
  const handleLetterClose = () => {
    window.history.back();
    back();
    setLetterOpen(false);
  };
  useEffect(() => {
    let letterAutoClose = (e) => {
      if (!letterRef.current.contains(e.target) && letterIsOpen) {
        handleLetterClose();
      }
    };

    document.addEventListener("mousedown", letterAutoClose);

    return () => {
      document.removeEventListener("mousedown", letterAutoClose);
    };
  });

  useEffect(() => {
    const handlePopstate = () => {
      // If modal is open, close it when user clicks back button
      if (letterIsOpen) {
        setLetterOpen(false);
        back();
      }
    };
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [letterIsOpen]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLetterSent(true);
    vibrate();
    setTimeout(() => {
      document.querySelector(".letter__input_1").value = "";
      document.querySelector(".letter__input_2").value = "";
      setLetterSent(false);
    }, 5000);

    emailjs
      .sendForm(
        "service_ntnqq3t",
        "template_on834fu",
        form.current,
        "TUmEo9ggPWli7XQP4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const vibrate = () => {
    if('vibrate' in navigator) {
      navigator.vibrate(100);
    }
  }

  // These Functions for Google Recaptcha
  const captchaKey = "6LdJjb0kAAAAABpjfXZ_sEeFYf7B1-YV73IeU82L";
  const [captchaIsDone, setCaptchaDone] = useState(false);
  function captchaOnChange() {
    setCaptchaDone(true);
  }

  const [letterSent, setLetterSent] = useState(false);

  return (
    <div className={`${styles.socials}`}>
      <div
        className={` ${styles.socials__wrapper} ${
          socialsOpen ? styles.active : ""
        }`}
        ref={socialsRef}
      >
        <div
          className={`${styles.main__btn} ${styles.social__btn} ${styles.social__btn_1}`}
          onClick={() => setSocialsOpen(!socialsOpen)}
        >
          <BtnIcon1 className={styles.icon} />
        </div>
        <a
          href={dictionary.socials.links.link1}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.social__btn} ${styles.social__btn_2}`}
        >
          <BtnIcon2 className={styles.icon} />
        </a>
        <li
          className={`${styles.social__btn} ${styles.social__btn_3}`}
          onClick={handleLetterOpen}
        >
          <BtnIcon3 className={styles.icon} />
        </li>
        <a
          href={dictionary.socials.links.link2}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.social__btn} ${styles.social__btn_4}`}
        >
          <BtnIcon4 className={styles.icon} />
        </a>
        <a
          href={dictionary.socials.links.link3}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.social__btn} ${styles.social__btn_5}`}
        >
          <BtnIcon5 className={styles.icon} />
        </a>
      </div>
      <div className={`${styles.letter} ${letterIsOpen ? styles.active : ""}`}>
        <LetterCloseIcon
          className={`${styles.close__btn}`}
          onClick={handleLetterClose}
        />
        <div
          className={`${styles.letter__wrapper}`}
          ref={letterRef}
          onClose={handleLetterClose}
        >
          <p
            className={`${styles.letter__sent} ${
              letterSent ? styles.active : ""
            }`}
          >
            {dictionary.socials.letter.sent}
          </p>
          <h3 className={styles.letter__title}>
            {dictionary.socials.letter.title}
          </h3>
          <form
            action=""
            className={`${styles.letter__form}`}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              name="user_name"
              type="text"
              className={`${styles.letter__input} letter__input_1`}
              placeholder={dictionary.socials.letter.input1}
              required
            />
            <input
              name="user_phone"
              type="number"
              className={`${styles.letter__input} letter__input_2`}
              inputMode="numeric"
              placeholder={dictionary.socials.letter.input2}
              required
            />

            <ReCAPTCHA
              sitekey={captchaKey}
              className={styles.letter__recaptcha}
              onChange={captchaOnChange}
            />

            {captchaIsDone && (
              <button
                type="submit"
                className={`${styles.letter__submit} ${
                  letterSent ? styles.active : ""
                }`}
              >
                {dictionary.socials.letter.btn}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Socials;
