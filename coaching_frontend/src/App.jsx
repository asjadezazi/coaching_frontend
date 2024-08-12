import React from 'react'
import Home from './Components/Pages/Home'
import { Contact } from './Components/Pages/Contact'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="*" element={<Home />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
