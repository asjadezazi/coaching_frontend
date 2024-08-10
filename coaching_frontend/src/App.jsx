import React from 'react'
import {Navbar} from './Components/Navigation/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Pages/Home'
// import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
