/* eslint-disable jsx-a11y/iframe-has-title */
import { useContext } from "react";

import styles from "./contact.module.scss";

import { LanguageContext } from "../../containers/Language";

const Contact = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div className={styles.contacts} id="contacts">
      <div className={`${styles.container} ${styles.contacts_container}`}>
        <h2 className={`section_title ${styles.title}`}>
          {dictionary.contacts.title}
        </h2>
        <iframe
          className={styles.contacts_map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.179317144455!2d73.103338!3d49.8014964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4243473d50ad3b1b%3A0x9a4f61d5e652e188!2sPichugin%20Street%20240%2C%20Karaganda%20100000%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1678277010524!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.contactLinks}>
          {Object.keys(dictionary.contacts.contactLinks.items).map(
            (item, i) => (
              <div key={i} className={styles.link_wrapper}>
                <h4 className={styles.links_title}>
                  {dictionary.contacts.contactLinks.items[item].name}
                </h4>
                <div className={styles.links}>
                  {Object.keys(
                    dictionary.contacts.contactLinks.items[item].links
                  ).map((link, i) => (
                    <a
                      className={styles.link}
                      key={i}
                      href={
                        dictionary.contacts.contactLinks.items[item].links[link]
                          .link
                      }
                      target="_blank" rel="noreferrer"
                    >
                      {
                        dictionary.contacts.contactLinks.items[item].links[link]
                          .name
                      }
                    </a>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
