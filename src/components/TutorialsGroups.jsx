import React, {useState} from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatPopUp from '../components/ChatPopUp';
import CookieBanner from '../components/CookieBanner';
import VideosTab from './TutorialsTabs/VideosTab';
import FilesTab from './TutorialsTabs/FilesTab';



const BusinessListPage = () => {

  const [TabSet , setTabSet] = useState('Videos')

  return (
    <>
      <Navbar />
      {/* <CookieBanner /> */}
      {/* <ChatPopUp /> */}
      {/* HEADER AND TOGGLES */}
      <div className="container ">
<div className="row">
  
<div className="col-12 mt-3">
  <div className="title-button-container">
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" onChange={() => setTabSet('Videos')} autoComplete="off" defaultChecked />
      <label className="btn btn-outline-dark position-relative" htmlFor="btnradio1">
        Videos
    
      </label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" onChange={() => setTabSet('Files')} autoComplete="off" />
      <label className="btn btn-outline-dark position-relative" htmlFor="btnradio2">
        Files
       
      </label>

    </div>
  </div>
</div>

  
        </div>
        </div>
  {
    TabSet === 'Videos' &&
    <VideosTab />
  }
  {
    TabSet === 'Files' &&
    <FilesTab />
  }

      <Footer />
    </>
  );
};

export default BusinessListPage;
