import React, { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/useHttp";
import { Loading } from "./Loading";
// import movies from '../api/movies.json' <-- for test
import Movie from "./Movie";
import styles from "./MoviesGrid.module.css";



const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie"
      get(searchUrl)
          .then((data) => setMovies(data.results))
          .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className={styles.movies}>
      {movies.length === 0 ? (
        <Loading />
      ) : (
        movies.map((el) => (
          <Movie
            key={el.id}
            title={el.title}
            img={el.poster_path}
            description={el.overview}
            date={el.release_date}
            id={el.id}
          />
        ))
      )}
    </div>
  );
};

export default MoviesGrid;
