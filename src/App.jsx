import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Payments from './pages/Payments'
import Register from './pages/Register'
import Map from './pages/Map'
import ContactUs from './pages/ContactUs'
import Tutorials from './pages/Tutorials'
import Settings from './pages/Settings';
import Deposits from './pages/Deposits';

// import ProtectedRoute from './components/ProtectedRoute'
// import Login from './pages/Account/Login'
// import Signup from './pages/Account/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* <ProtectedRoute path="/home" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/deposits" element={<Deposits />} />

        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
