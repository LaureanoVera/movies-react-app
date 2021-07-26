import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../components/Loading'
// import movies from '../api/movies.json'
import { get } from '../utils/useHttp'
import styles from './MovieDetails.module.css'

export const MovieDetails = () => {
  const imgUrl = `https://image.tmdb.org/t/p/w300`;
  let { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    setIsLoading(true)

    get(`/movie/${movieId}`)
      .then(data => {
        setMovie(data)
        setIsLoading(false)
      })
  }, [movieId])

  if (isLoading) {
    return <Loading />
  }
  
  return (
    <div className={styles.details}>
      <img className={styles.imgBg} src={imgUrl+movie.backdrop_path} alt={movie.title} />
      <img className={`${styles.col} ${styles.img}`} src={imgUrl+movie.poster_path} alt={movie.title} />
      <div className={styles.col}>
        <small><b>Release date</b>: {movie.release_date}</small>
        <p><b>Title</b>: {movie.title}</p>
        <p><b>Description</b>: {movie.overview}</p>
      </div>
    </div>
  )
}
