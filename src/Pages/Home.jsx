import React, { useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Cards from '../components/Cards';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])

    const data = async () => {
        const getApi = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8895fdb25f885f3fe2c772fa3afbb54f')
        const api = await getApi.json()
        setPopularMovies(api.results)
    }

    useEffect (() => {
        data()
    }, [])

    const render = popularMovies.map((movie, idx) => {
        return (
           <div key={idx}>
            <div className='posterImage'>
            <img src= {`https://image.tmdb.org/t/p/original${ movie && movie.backdrop_path }`} alt="" />
            </div>
                <div className='posterImage__overlay'>
                  <div className='posterImage__title'>{movie.original_title}</div>
                  <div className='posterImage__runtime'>
                    {movie.release_date}
                    <span className='posterImage__rating'>
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                    <div className='posterImage__description'>{movie.overview}</div>
                </div>
           </div> 
        )
    })



  return (
    <div className='carousel '>
      <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}
      infiniteLoop={true}
      showStatus={false}
      stopOnHover={true}
      >
        { render }
      </Carousel>
      <Cards />
    </div>
  )
}

export default Home
