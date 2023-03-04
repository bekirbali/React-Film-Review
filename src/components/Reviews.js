import styles from "./Reviews.module.scss";
import React from "react";

import StarRatingComponent from "react-star-rating-component";

export const Reviews = ({ data }) => {
  const value = data.rate.toFixed(0) / 2;
  return (
    <div className={styles.container}>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <p className={styles.tag}>{data.tags.join("/")}</p>
      <div className={styles.rate}>
        <StarRatingComponent value={value} name={data.title} starCount={5} />
        <p>{`${data.rate.toFixed(1)} / 10`}</p>
      </div>
    </div>
  );
};
