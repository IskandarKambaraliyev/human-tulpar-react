import { useContext, useState, useEffect, useRef } from "react";

import styles from "./gallery.module.scss";

import { LanguageContext } from "../../containers/Language";
import { Link } from "react-router-dom";

import Line from "../../containers/sectionBgLines/Line";

import { MdSlowMotionVideo as VideoIcon } from "react-icons/md";
import CardSkeleton, { Rect, Text } from "../../containers/skeleton/Skeleton";

const Gallery = (props) => {
  const { dictionary } = useContext(LanguageContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(dictionary);
    }, 2000);
  }, [dictionary]);

  const [filter, setFilter] = useState("all");
  const filterChange = (type) => {
    setFilter(type);
  };

  const [file, setFile] = useState(null);

  const mediaRef = useRef();

  useEffect(() => {
    let letterAutoClose = (e) => {
      if (!mediaRef.current.contains(e.target) && showModal) {
        setShowModal(false);
        back();
        window.history.back();
      }
    };

    document.addEventListener("mousedown", letterAutoClose);

    return () => {
      document.removeEventListener("mousedown", letterAutoClose);
    };
  });

  const [showModal, setShowModal] = useState(false);

  showModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

  const push = () => {
    window.history.pushState(null, null);
  };

  const back = () => {
    window.history.back();
  };

  // Function to open modal
  const openModal = (item) => {
    setShowModal(true);
    // Push a new entry into history stack
    window.history.pushState(null, null);
    setFile(item);
    push();
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    // Go back to previous entry in history stack
    window.history.back();
    back();
  };

  // Effect hook to listen for popstate event
  useEffect(() => {
    const handlePopstate = () => {
      // If modal is open, close it when user clicks back button
      if (showModal) {
        setShowModal(false);
        back();
      }
    };
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [showModal]);
  return (
    <>
      <div className={`${styles.gallery} ${styles[props.className]}`}>
        <div className={`${styles.container} ${styles.gallery_container}`}>
          <h2 className={styles.section_title}>{dictionary.gallery.title}</h2>
          <div className={styles.gallery_wrapper}>
            <div className={styles.gallery_filter}>
              <div className={styles.container}>
                {Object.keys(dictionary.gallery.filter).map((item, i) => (
                  <div
                    key={i}
                    className={`${styles.filter} ${
                      filter === dictionary.gallery.filter[item].type
                        ? styles.active
                        : ""
                    }`}
                    onClick={() =>
                      filterChange(dictionary.gallery.filter[item].type)
                    }
                  >
                    {dictionary.gallery.filter[item].name}
                  </div>
                ))}
              </div>
            </div>
            {data ? (
              <div className={styles.media_wrapper}>
                {filter === "all"
                  ? data.gallery.gallerySrc.map((item, i) => (
                      <div
                        className={styles.media}
                        key={i}
                        onClick={() => openModal(item)} title={item.name}
                      >
                        <div className={styles.media_src}>
                          {item.type === "photo" ? (
                            <img src={item.src} alt="" />
                          ) : (
                            <video src={item.src} muted poster={item.poster} />
                          )}
                        </div>
                        <div className={styles.media_info}>
                          {item.type === "video" ? (
                            <>
                              <div className={styles.video_icon}>
                                <VideoIcon className={styles.icon} />
                              </div>
                              <div className={styles.info}>{item.name}</div>
                            </>
                          ) : (
                            ""
                          )}
                          {item.type === "photo" ? (
                            <>
                              <div className={styles.info}>{item.name}</div>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ))
                  : ""}
                {filter === "photo"
                  ? data.gallery.gallerySrc.map((item, i) =>
                      item.type === "photo" ? (
                        <div
                          className={styles.media}
                          key={i}
                          onClick={() => openModal(item)} title={item.name}
                        >
                          <div className={styles.media_src}>
                            <img src={item.src} alt="" />
                          </div>
                          <div className={styles.media_info}>
                            <div className={styles.info}>{item.name}</div>
                          </div>
                        </div>
                      ) : null
                    )
                  : ""}
                {filter === "video"
                  ? data.gallery.gallerySrc.map((item, i) =>
                      item.type === "video" ? (
                        <div
                          className={styles.media}
                          key={i}
                          onClick={() => openModal(item)} title={item.name}
                        >
                          <div className={styles.media_src}>
                            <video src={item.src} muted poster={item.poster} />
                          </div>
                          <div className={styles.media_info}>
                            <div className={styles.video_icon}>
                              <VideoIcon className={styles.icon} />
                            </div>
                            <div className={styles.info}>{item.name}</div>
                          </div>
                        </div>
                      ) : null
                    )
                  : ""}
              </div>
            ) : (
              <CardSkeleton style={{ margin: "50px 0" }}>
                <Rect />
                <Text inside="bottom" />
              </CardSkeleton>
            )}
          </div>
          <Link
            preventScrollReset={true}
            reloadDocument
            to={dictionary.gallery.btn.link}
            className={`${styles.link_btn} ${styles.btn_light}`}
          >
            {dictionary.gallery.btn.name}
          </Link>
        </div>
        {props.className ? "" : <Line className="dark" />}
      </div>
      {showModal && (
        <div
          className={styles.media_popup}
          // style={{ display: file ? "block" : "none" }}
          onClose={closeModal}
        >
          <span
            onClick={() => {
              setShowModal(false);
              window.history.back();
              back();
            }}
          >
            &times;
          </span>
          {file?.type === "video" ? (
            <video src={file?.src} autoPlay controls ref={mediaRef} />
          ) : (
            <img
              src={file?.src}
              alt=""
              ref={mediaRef}
              onClick={() => {
                setShowModal(false);
                back();
                window.history.back();
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;
