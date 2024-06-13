import React, { useState } from 'react'
import movieData from '../apiData/movieData'

const Section = (prop) => {
    const [source, setSourse] = useState(movieData)

    const render = source.map((movie, idx) => {
        return (
            <div key={idx}>
                <div className='background'>
                <img src= {movie.imgUrl} alt="" />
                </div>
                <div className='under'>
                <h4>RATING</h4>
                <div className='under-sub'>
                <img src="src\css\images\comments.gif" alt="" />
                <h4>{movie.comment}</h4>
                </div>
                </div>
                

            </div>
        )
    })

    const filtration = (property) => {
        const changeProperty = movieData.filter((movie) => property == movie.property)

        setSourse(changeProperty)
    }

  return (
    <div className='body'>
    <hr className='rule-2'/>
        <div className='split'>
        <p>{prop.section}</p>
        <p>see all</p>
        </div>
      <div className='content' onLoad={() => filtration(prop.property)}>
      {render}
      </div>
    </div>
  )
}

export default Section
