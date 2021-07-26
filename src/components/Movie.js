import React from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ title, img, description, date, id }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w300`;

  return (
    <div className={styles.movie}>
      <Link to={"/movies/" + id}>
        <img width={230} height={345} src={imgUrl + img} alt={title} />
        <h4>{title}</h4>
      </Link>
      {/* <p>{description}</p> */}
      {/* <p><strong>{date}</strong></p> */}
    </div>
  );
};

export default Movie;
