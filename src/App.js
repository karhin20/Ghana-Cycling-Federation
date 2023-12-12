import React from "react"
import Navbar from "./components/common/header/navbar"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"


const App = () => {
  return (
    <>
    
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepages />} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
