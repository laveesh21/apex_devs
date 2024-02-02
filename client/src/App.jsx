import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/dashboard/Navbar';
import HomePage from './components/dashboard/HomePage';
import Community from './components/dashboard/Community';
import About from './components/dashboard/About';
import Profile from './components/dashboard/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <div className="super-nav-bar"><Navbar/></div>  
        <Routes>
          <Route path="/" element={<><HomePage /></>} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </>

  )
}

export default App