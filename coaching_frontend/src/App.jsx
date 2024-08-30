import React from 'react'
import Home from './components/Pages/Home/Home'
import Courses from './components/Pages/Courses/Courses'
import Testimonials from './components/Pages/Testimonials/Testimonials'
import AboutUs from './components/Pages/About Us/AboutUs'
import { Contact } from './components/Pages/Contact/Contact'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
