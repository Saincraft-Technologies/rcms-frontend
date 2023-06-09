import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Payments from './pages/Payments';
import Register from './pages/Register';
import Map from './pages/Map';
import ContactUs from './pages/ContactUs';
import Tutorials from './pages/Tutorials';
import Settings from './pages/Settings';
import Deposits from './pages/Deposits';

import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Account/Login';
// import Signup from './pages/Account/Signup';

import Navbar from './components/Navbar';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        {/* Application routes */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={ import.meta.env.VITE_ENV === 'development' ? ( <Home /> ) : (
                <ProtectedRoute user={user}>
                  <Home />
                </ProtectedRoute>
              )
            }
          />

          {/* Navbar route */}
          <Route path="/navbar" element={<Navbar setUser={setUser} />}
          />

          {/* About route */}
          <Route path="/about" element={<About />} />

          {/* Payments route */}
          <Route path="/payments" element={<Payments />} />

          {/* Register route */}
          <Route path="/register" element={<Register />} />

          {/* Map route */}
          <Route path="/map" element={<Map />} />

          {/* ContactUs route */}
          <Route path="/contactus" element={<ContactUs />} />

          {/* Tutorials route */}
          <Route path="/tutorials" element={<Tutorials />} />

          {/* Settings route */}
          <Route path="/settings" element={<Settings />} />

          {/* Deposits route */}
          <Route path="/deposits" element={<Deposits />} />

          {/* Login route */}
          <Route path="/login" element={
              <Login user={user} setUser={setUser} />
          } />

          {/* Signup route */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
