import React from 'react'
import Section from './Section'


const Body = () => {
  

  return (
    <div>
    <hr className='rule' />
      <div className='search-section'>
        <div className='list'>
          <ul>
            <li><a href="">SHOW ALL</a></li>
            <li><a href="">LATEST TRAILER</a></li>
            <li><a href="">TOP RATED</a></li>
            <li><a href="">MOST COMMENTED</a></li>
          </ul>
        </div>
        <div className='search'>
          <label htmlFor='search'>SEARCH</label>
          <input type="text" id='search' placeholder='Enter Search here' />
          <button>GO</button>
        </div>
      </div>
      <Section property = 'latest' section = 'LATEST TRAILERS'/>
      <Section property = 'top' section = 'TOP RATED'/>
      <Section property = 'most' section = 'MOST WATCHED'/>


    </div>
  )
}

export default Body
