import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PopupChat from '../components/ChatPopUp'
import DepositsComponent from '../components/DepositsComponent'

const Deposits = () => {
  return (
    <>
        <Navbar />
        <PopupChat />
        <h1 className="text-center mt-3">Deposits</h1>
        <DepositsComponent />
        <Footer />
    </>
  )
}

export default Deposits