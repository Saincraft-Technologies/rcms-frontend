import { useState, createContext } from 'react'
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

import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Account/Login'
// import Signup from './pages/Account/Signup'

export const UserContext = createContext();


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
            <UserContext.Provider value={user}>

      <Routes>
        <Route path="/" element={
        <ProtectedRoute user={user}>
          <Home />
        </ProtectedRoute>
        }/>
        
        <Route path="/about" element={<About />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/map" element={<Map />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/deposits" element={<Deposits />} />

        <Route path="/login" element={ <Login
                          user={user}
                          setUser={setUser}
                        />
                      }
                    />
        {/* <Route path="/signup" element={<Signup />} />  */}
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    
  )
}

export default App
