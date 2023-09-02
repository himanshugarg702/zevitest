import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Home from './Pages/Home'
const App = () => {
  return (
    <Router>
  
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App

// Portfolio and Website and Technology 