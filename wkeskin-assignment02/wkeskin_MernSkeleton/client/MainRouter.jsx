/* 
File Name: MainRouter.jsx
Student Name: Wardatul Keskin
Student ID: 301294696
Date: 2024-09-26
*/

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasicNavbar from './src/components/Navbar'
import Home from './src/pages/Home'
import Projects from './src/pages/Projects'
import Services from './src/pages/Services'
import About from './src/pages/About'
import Contact from './src/pages/Contact'

export default function MainRouter() {
  return (
    <div>
        <BasicNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>
  )
}
