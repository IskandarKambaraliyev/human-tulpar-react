import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import LanguageSelector from "../languageSelector/LanguageSelector";
import { LanguageContext } from "../../containers/Language";

// Importing React Icons
import { GiHamburgerMenu as NavToggle } from "react-icons/gi";

// Importing styles
import styles from "./navbar.module.scss";

const Navbar = () => {
  const { dictionary } = useContext(LanguageContext);

  // For 1-Navbar-Dropdown
  const [navDrop1, setNavDrop1] = useState(false);
  let navDrop1Ref = useRef();

  // For 2-Navbar-Dropdown
  const [navDrop2, setNavDrop2] = useState(false);
  let navDrop2Ref = useRef();

  // For Sidebar
  const [sidebar, setSidebar] = useState(false);
  let sidebarRef = useRef();
  let toggleRef = useRef();

  sidebar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  // const linkHandle = () => {
  //   if (sidebar) {
  //     setTimeout(back(), 1000)
  //   }
  // }

  //
  useEffect(() => {
    let navDrop1Handler = (e) => {
      if (!navDrop1Ref.current.contains(e.target) && navDrop1) {
        setNavDrop1(false);
      }
    };
    let navDrop2Handler = (e) => {
      if (!navDrop2Ref.current.contains(e.target) && navDrop2) {
        setNavDrop2(false);
      }
    };

    let sidebarHandler = (e) => {
      if (
        !sidebarRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target) && sidebar
      ) {
        setSidebar(false);
        // Go back to previous entry in history stack
        window.history.back();
        back();
      }
    };

    document.addEventListener("mousedown", navDrop1Handler); // 1-Navbar-Dropdown
    document.addEventListener("mousedown", navDrop2Handler); // 2-Navbar-Dropdown
    document.addEventListener("mousedown", sidebarHandler); // Sidebar

    return () => {
      document.removeEventListener("mousedown", navDrop1Handler); // 1-Navbar-Dropdown
      document.removeEventListener("mousedown", navDrop2Handler); // 2-Navbar-Dropdown
      document.removeEventListener("mousedown", sidebarHandler); // Sidebar
    };
  });
  //

  // these functions for Navbar to set Sticky class
  const [navSticky, setNavSticky] = useState(false);
  function setNavStickyClass() {
    if (window.scrollY > 0) {
      setNavSticky(true);
    } else {
      setNavSticky(false);
    }
  }
  window.addEventListener("scroll", setNavStickyClass);
  //

  const push = () => {
    window.history.pushState(null, null);
  };

  const back = () => {
    window.history.back();
  };

  // Function to open modal
  const openModal = (item) => {
    setSidebar(true);
    // Push a new entry into history stack
    window.history.pushState(null, null);
    push();
  };

  // Function to close modal
  const closeModal = () => {
    setSidebar(false);
    // Go back to previous entry in history stack
    window.history.back();
    back();
  };

  // Effect hook to listen for popstate event
  useEffect(() => {
    const handlePopstate = () => {
      // If modal is open, close it when user clicks back button
      if (sidebar) {
        setSidebar(false);
        back();
      }
    };
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [sidebar]);
  return (
    <nav className={`${styles.navbar} ${navSticky ? styles.sticky : ""}`}>
      <div className={`${styles.container} ${styles.navbar__container}`}>
        <Link to="/" reloadDocument preventScrollReset={true}>
          <div className={styles.nav__logo}>
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
                d="M0.0408694 16.8393C0.464547 22.6331 4.47768 27.275 12.0803 30.7649C21.1988 20.578 34.9739 10.3231 53.4055 0C40.7182 5.27034 28.4481 11.9515 16.5949 20.0438C12.4253 16.5201 10.6889 13.6845 11.3857 11.5368C12.3565 8.65715 14.71 7.8025 18.4469 8.97301C16.0418 8.62066 14.7734 9.04317 14.6412 10.2405C14.5289 11.0205 14.9886 11.4896 15.4918 11.8269C16.3525 12.4038 17.4686 12.4793 19.2856 12.2941C20.9651 12.1352 22.3638 12.6791 23.4818 13.9255C24.0753 14.2444 24.3742 13.9336 24.3789 12.9932C25.3768 13.0309 26.0134 12.9629 26.289 12.7894C21.7345 9.95295 18.5317 7.68041 16.6811 5.97203C15.2049 4.90385 17.4069 4.03293 17.5 3.75C10.6063 2.84814 6.2856 4.84697 4.67123 7.22482C1.26586 10.0726 -0.277672 13.2774 0.0408694 16.8393Z"
                fill="#32495E"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.2582 13.041C40.9435 15.1989 26.5513 24.104 8.08154 39.7561C25.7356 20.211 40.397 9.48906 52.0682 7.59269C61.2429 6.44685 67.1851 9.36009 69.8948 16.3328C70.8354 22.0538 65.4722 28.1913 53.8047 34.7453C46.4978 39.0612 40.5556 42.4796 35.9781 45.0001C29.7126 42.3582 23.9248 39.173 18.6145 35.4443C32.2634 24.8355 41.5241 19.5137 46.3963 19.4792C49.5206 18.9749 51.2473 20.0431 51.5765 22.6836C51.4781 24.2419 50.5907 25.4655 48.9142 26.3547C49.1407 24.1949 48.2917 22.7966 46.3674 22.1594C43.312 21.6155 41.3442 22.4312 40.4639 24.6064C38.8341 28.9455 37.4451 31.4802 36.2965 32.2104C34.2002 33.2455 33.3224 34.1778 33.6632 35.0072C34.0934 36.1055 34.489 36.7465 34.8497 36.93C35.4207 36.1152 35.9511 35.6102 36.4413 35.4151C36.8765 35.8046 36.4039 36.6883 35.0233 38.0663C35.6134 38.6083 36.3753 38.5693 37.3094 37.9497C46.681 31.8577 52.7776 28.0121 55.5993 26.4128C56.4678 26.0051 57.4711 26.481 58.6089 27.8403C58.8518 26.2139 59.0255 24.2329 59.1296 21.8975C61.4195 17.7488 61.6123 14.952 59.7083 13.5071C57.1207 12.2547 54.3039 12.0993 51.2582 13.041Z"
                fill="#F9F9F9"
              />
            </svg>
            <span>{dictionary.navbar.logo}</span>
          </div>
        </Link>

        <div
          className={styles.nav__toggle}
          ref={toggleRef}
          onClick={sidebar ? closeModal : openModal}
        >
          <NavToggle className={styles.toggle__icon} />
        </div>

        <div
          className={`${styles.sidebar} ${sidebar ? styles.active : ""}`}
          ref={sidebarRef}
          onClose={closeModal}
        >
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <NavLink
                preventScrollReset={true}
                reloadDocument
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.navLink}`
                    : styles.navLink
                }
                to="/"
              >
                <span className={styles.nav__link}>
                  {dictionary.navbar.lists.link1}
                </span>
              </NavLink>
            </li>
            <li
              className={`${styles.nav__item} ${styles.nav__itemDropdown}`}
              onClick={() => setNavDrop1(!navDrop1)}
              ref={navDrop1Ref}
            >
              <span className={styles.nav__link}>
                {dictionary.navbar.lists.link2}
                <svg
                  className={navDrop1 ? styles.active : ""}
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
              <div
                className={`${styles.dropdown__wrapper} ${
                  navDrop1 ? styles.active : ""
                }`}
              >
                <li>
                  <NavLink
                    preventScrollReset={true}
                    reloadDocument
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.active} ${styles.navLink}`
                        : styles.navLink
                    }
                    to="/cardio"
                  >
                    <span>{dictionary.navbar.dropdown1.link1}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    preventScrollReset={true}
                    reloadDocument
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.active} ${styles.navLink}`
                        : styles.navLink
                    }
                    to="/trauma"
                  >
                    <span>{dictionary.navbar.dropdown1.link2}</span>
                  </NavLink>
                </li>
              </div>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                preventScrollReset={true}
                reloadDocument
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.navLink}`
                    : styles.navLink
                }
                to="/reports"
              >
                <span className={styles.nav__link}>
                  {dictionary.navbar.lists.link3}
                </span>
              </NavLink>
            </li>
            <li
              className={`${styles.nav__item} ${styles.nav__itemDropdown}`}
              onClick={() => setNavDrop2(!navDrop2)}
              ref={navDrop2Ref}
            >
              <span className={styles.nav__link}>
                {dictionary.navbar.lists.link4}
                <svg
                  className={navDrop2 ? styles.active : ""}
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
              <div
                className={`${styles.dropdown__wrapper} ${
                  navDrop2 ? styles.active : ""
                }`}
              >
                <li>
                  <NavLink
                    preventScrollReset={true}
                    reloadDocument
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.active} ${styles.navLink}`
                        : styles.navLink
                    }
                    to="/specialists"
                  >
                    <span>{dictionary.navbar.dropdown2.link1}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    preventScrollReset={true}
                    reloadDocument
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.active} ${styles.navLink}`
                        : styles.navLink
                    }
                    to="/find"
                  >
                    <span>{dictionary.navbar.dropdown2.link2}</span>
                  </NavLink>
                </li>
              </div>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                preventScrollReset={true}
                reloadDocument
                className={({ isActive }) =>
                  isActive
                    ? `${styles.active} ${styles.navLink}`
                    : styles.navLink
                }
                to="/news"
              >
                <span className={styles.nav__link}>
                  {dictionary.navbar.lists.link5}
                </span>
              </NavLink>
            </li>
            <LanguageSelector sidebar={sidebar} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
