import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Settings = () => {
  return (
    <>
        <Navbar />
        < h1 className='text-center mt-3' > Settings </h1>

        {/* card with toggle for dark mode and slector for language */}
        
        <div className="container">
        <div className="card mt-5">
            <div className="card-body">
                <h5 className="card-title">Dark Mode</h5>
                <p className="card-text">Toggle dark mode on or off</p>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                <hr />
                <h5 className="card-title">Language</h5>
                <p className="card-text">Select your language</p>
                <select className="form-select" aria-label="Default select example">
                    <option selected>English</option>
                    <option value="1">Swahili</option>
                    <option value="2">French</option>
                </select>

            </div>
        </div>
        </div>


        <Footer />
    </>
  )
}

export default Settings