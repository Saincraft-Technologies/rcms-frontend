import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PopupChat from '../components/ChatPopUp'
import TutorialsGroups from '../components/TutorialsGroups'

const Tutorials = () => {
  return (
    <>
        <Navbar />
        <h1 className="text-center mt-3">Tutorials</h1>
        <TutorialsGroups />
        {/* <PopupChat /> */}
        <Footer />
    </>

  )
}

export default Tutorials