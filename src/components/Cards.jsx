import React, { useState, useEffect} from 'react'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
// import { Link } from 'react-router-dom'


const Cards = () => {
  const [Movies, setMovies] = useState([])

  const data = async () => {
      const getApi = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=8895fdb25f885f3fe2c772fa3afbb54f')
      const api = await getApi.json()
      setMovies(api.results)
  }

  useEffect (() => {
      data()
  }, []) 
  
  const render = Movies.map((movie, idx) => {
    return (
       <div key={idx}>
         <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
       </div> 
    )
})
  
  return (
    <div>
      <h2 className='h2'>Popular</h2>
      <div className='poster'>
        {render}
      </div>
    </div>
  )

}
export default Cards
