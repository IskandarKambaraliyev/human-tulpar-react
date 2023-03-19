import React from "react";
import styles from "./skeleton.module.scss";

export default function CardSkeleton(props) {
  return <div className={styles.card_skeleton} style={props.style}><div>{props.children}</div></div>;
}

export const Rect = (props) => {
  return (
    <div className={styles.rect} style={props.style}>
    </div>
  );
};
export const Text = (props) => {
  return (
    <div className={`${styles.text} ${props.inside === "bottom" ? styles.bottom : ""} ${props.inside === "top" ? styles.top : ""}`} style={props.style}>
    </div>
  );
};

export const Circle = (props) => {
    return (
        <div className={styles.circle} style={props.style}></div>
    )
}

export function ContentSkeleton(props) {
    return (
        <div className={styles.content_skeleton} style={props.style}>
            {props.children}
        </div>
    )
}