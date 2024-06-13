import React from 'react'
import '../src/css/style.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
// import { BrowserRouter, Routes, Route} from 
import '../src/main.css'
import Test from './components/Test'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className='container'>
      {/* <Header/>
      <Body/>
      <Footer/> */}
      <Router>
      <Test />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movies/popular' element={<h1>movie detailpage</h1>}></Route>
          <Route path='movies/top_rated' element={<h1>movie list page</h1>}></Route>
          <Route path='movies/upcoming' element={<h1>movie upcoming</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
