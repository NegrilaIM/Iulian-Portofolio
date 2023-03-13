import React from 'react'
import Header from './Components/Head/Header'
import './App.css'
import Home from './Components/Hero/Home'
import Skills from './Components/MySkills/Skills'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
  <>
   <Header />
   <Home />
   <Skills />
   <WorkExperience />
   <Contact />
   <Footer />
  </>  
  )
}

export default App