import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import './App.css'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import WithAuth from './HOC/WithAuth';

function App() {
  const AuthenticatedDashboard = WithAuth(Dashboard);
  const AuthenticatedProfile = WithAuth(Profile);
  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<AuthenticatedDashboard />} />
        <Route path="/profile" element={<AuthenticatedProfile />} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App
