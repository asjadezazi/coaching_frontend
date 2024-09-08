import React from 'react'
import Home from './components/Pages/Home/Home'
import Courses from './components/Pages/Courses/Courses'
import AboutUs from './components/Pages/About Us/AboutUs'
import Contact from './components/Pages/Contact/Contact'
import FAQs from './components/Pages/FAQs/FAQs'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Helmet from 'react-helmet'
import ScrollToTop from "react-scroll-to-top";
import { ArrowBigUpDash } from 'lucide-react';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Helmet>
          <title>Ezazi CLasses</title>
          <meta name='description' content='Ezazi Classes offers comprehensive coaching for students with a focus on quality education, experienced faculty, and proven results. Explore our courses and testimonials to learn more about how we can help you achieve your academic goals.' />
        </Helmet>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
        <ScrollToTop
          smooth
          component={<ArrowBigUpDash />}
          className='flex justify-center text-white items-center'
          style={{
            backgroundColor: '#0018C4',
          }}
        />
      </Layout>
    </BrowserRouter>
  )
}

export default App
