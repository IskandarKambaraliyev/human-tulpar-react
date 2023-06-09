import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./footer.module.scss";

import ToTop from "./toTop/ToTop";

import { LanguageContext } from "../../containers/Language";

const Footer = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footer_container}`}>
        <div className={styles.top}>
          <div className={styles.left}>
            <Link preventScrollReset={true} reloadDocument to="/" className={styles.logo}>
              <svg
                width="70"
                height="45"
                viewBox="0 0 70 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.0408694 16.7913C0.464547 22.5686 4.47768 27.1973 12.0803 30.6772C21.1988 20.5193 34.9739 10.2937 53.4055 0C40.7182 5.25532 28.4481 11.9174 16.5949 19.9867C12.4253 16.473 10.6889 13.6455 11.3857 11.5039C12.3565 8.63248 14.71 7.78027 18.4469 8.94744C16.0418 8.5961 14.7734 9.01741 14.6412 10.2113C14.5289 10.9891 14.9886 11.4569 15.4918 11.7932C16.3525 12.3685 17.4686 12.4438 19.2856 12.2591C20.9651 12.1007 22.3638 12.6429 23.4818 13.8858C24.0753 14.2038 24.3742 13.8939 24.3789 12.9562C25.3768 12.9938 26.0134 12.926 26.289 12.753C21.7345 9.9246 18.5317 7.65853 16.6811 5.95502C15.2049 4.88988 17.4069 4.02144 17.5 3.73932C10.6063 2.84002 6.2856 4.83316 4.67123 7.20424C1.26586 10.0439 -0.277672 13.2396 0.0408694 16.7913Z"
                  fill="#F9F9F9"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51.2582 13.0038C40.9435 15.1556 26.5513 24.0352 8.08154 39.6428C25.7356 20.1534 40.397 9.46197 52.0682 7.571C61.2429 6.42843 67.1851 9.33337 69.8948 16.2863C70.8354 21.9909 65.4722 28.1109 53.8047 34.6462C46.4977 38.9499 40.5556 42.3585 35.9781 44.8719C29.7126 42.2374 23.9248 39.0613 18.6145 35.3433C32.2634 24.7646 41.5241 19.4581 46.3963 19.4236C49.5206 18.9208 51.2473 19.9859 51.5765 22.619C51.4781 24.1728 50.5907 25.3929 48.9142 26.2795C49.1407 24.1259 48.2917 22.7316 46.3674 22.0962C43.312 21.5538 41.3442 22.3672 40.4639 24.5363C38.8341 28.863 37.4451 31.3904 36.2965 32.1186C34.2002 33.1507 33.3224 34.0804 33.6632 34.9074C34.0934 36.0026 34.489 36.6417 34.8497 36.8248C35.4207 36.0122 35.9511 35.5087 36.4413 35.3141C36.8765 35.7025 36.4039 36.5837 35.0233 37.9578C35.6134 38.4982 36.3753 38.4594 37.3094 37.8415C46.681 31.7669 52.7776 27.9323 55.5993 26.3375C56.4678 25.931 57.4711 26.4055 58.6089 27.7609C58.8518 26.1391 59.0255 24.1638 59.1296 21.8351C61.4195 17.6981 61.6123 14.9093 59.7083 13.4686C57.1207 12.2197 54.3039 12.0648 51.2582 13.0038Z"
                  fill="#F9F9F9"
                />
              </svg>
              {dictionary.footer.top.logo}
            </Link>
            <div className={`${styles.navLinks} ${styles.footer_links}`}>
              <h4 className={styles.footer_links_title}>
                {dictionary.footer.top.navLinksTitle}
              </h4>
              {Object.keys(dictionary.footer.top.navLinks).map((item, i) => (
                <NavLink preventScrollReset={true} reloadDocument
                  to={dictionary.footer.top.navLinks[item].link}
                  className={styles.link}
                >
                  {dictionary.footer.top.navLinks[item].name}
                </NavLink>
              ))}
            </div>
            <div className={`${styles.links} ${styles.footer_links}`}>
              <h4 className={styles.footer_links_title}>
                {dictionary.footer.top.linksTitle}
              </h4>
              {Object.keys(dictionary.footer.top.links).map((item, i) => (
                <a
                  href={dictionary.footer.top.links[item].link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  {dictionary.footer.top.links[item].name}
                </a>
              ))}
            </div>
          </div>
          <ToTop />
        </div>
        <div className={styles.bottom}>
          <p>{dictionary.footer.bottom}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
