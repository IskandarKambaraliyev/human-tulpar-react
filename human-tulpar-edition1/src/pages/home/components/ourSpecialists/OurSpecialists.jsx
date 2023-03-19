import { useContext, useEffect, useState } from 'react';

import styles from "./ourSpecialists.module.scss";

import { LanguageContext } from "../../../../containers/Language";
import { Link } from 'react-router-dom';

import CardSkeleton, { Text, Circle } from '../../../../containers/skeleton/Skeleton';

const OurSpecialists = () => {
    const { dictionary } = useContext(LanguageContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData(dictionary);
        }, 2000)
    }, [dictionary]);
  return (
    <div className={styles.ourSpecialists}>
        <div className={`${styles.container} ${styles.ourSpecialists_container}`}>
            <h2 className={styles.section_title}>{dictionary.home.ourSpecialists.title}</h2>
            {data ? <div className={styles.specialists_wrapper}>
                {Object.keys(dictionary.home.ourSpecialists.specialists).map((item, i) => (
                    <div className={styles.specialist}>
                        <div className={styles.specialist_img}>
                            <img src={dictionary.home.ourSpecialists.specialists[item].imgSrc} alt="" />
                        </div>
                        <h4 className={styles.specialist_name}>{dictionary.home.ourSpecialists.specialists[item].name}</h4>
                        <p className={styles.specialist_info}>{dictionary.home.ourSpecialists.specialists[item].info}</p>
                    </div>
                ))}
            </div> : <CardSkeleton style={{margin: "50px 0"}} >
                <Circle />
                <Text />
                <Text style={{minHeight: "100px"}} />
                </CardSkeleton>}
            <Link preventScrollReset={true} reloadDocument to="/specialists" className={styles.link_btn}>{dictionary.home.ourSpecialists.btn}</Link>
        </div>
    </div>
  )
}

export default OurSpecialists