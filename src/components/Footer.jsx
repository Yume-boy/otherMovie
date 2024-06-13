import React, { useState } from 'react'
import movieData2 from '../apiData/movieData2'

const Footer = () => {
  const [data, setData] = useState(movieData2)

  const render = movieData2.map((movie, idx)=> {
    return (
      <div key={idx}>
        <h4>{movie.name}</h4>
        <h4>{movie.info}</h4>
        <h4>see more</h4>
      </div>

    )
  })
  return (
    <div>
    <hr className='rule'/>
    <p style={{fontSize:'12px', fontWeight: 'bold'}}>COMING SOON<span style={{color:'red'}}>!</span></p>
      <div className='footer'>
        {render}
      </div>
      <hr className='rule'/>
      <div className='rights'>
        <p>Copyright © 2023 MovieHunter - All Rights Reserved</p>
        <p>Design by yumeNoir</p>
      </div>
    </div>
  )
}

export default Footer
