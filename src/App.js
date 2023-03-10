import React from 'react'
import Header from './Components/Head/Header'
import './App.css'
import Home from './Components/Hero/Home'
import Skills from './Components/MySkills/Skills'
import WorkExperience from './Components/WorkExperience/WorkExperience'

const App = () => {
  return (
  <>
   <Header />
   <Home />
   <Skills />
   <WorkExperience />
  </>  
  )
}

export default App