import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import Admin from './admin/Auth/Admin'
import Dashboard from './admin/components/Dashboard'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
