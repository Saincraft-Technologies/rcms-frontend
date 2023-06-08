import React, {useState} from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatPopUp from '../components/ChatPopUp';
import CookieBanner from '../components/CookieBanner';
import HomeTab from '../components/HomeTabs/HomeTab';
import TasksTab from '../components/HomeTabs/TasksTab';
import HistoryTab from '../components/HomeTabs/HistoryTab';
import ProfileTab from '../components/HomeTabs/ProfileTab';



const BusinessListPage = () => {

  const [TabSet , setTabSet] = useState('Home')

  return (
    <>
      <Navbar />
      <CookieBanner />
      {/* <ChatPopUp /> */}
      {/* HEADER AND TOGGLES */}
      <div className="container ">
  <div className='d-flex justify-content-center'>
  
<div className="col-12">
  <div className="title-button-container">
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" onChange={() => setTabSet('Home')} autoComplete="off" defaultChecked />
      <label className="btn btn-outline-dark position-inherit" htmlFor="btnradio1">
        Home
        <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
          2
        </span> {/* Example badge */}
      </label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" onChange={() => setTabSet('Tasks')} autoComplete="off" />
      <label className="btn btn-outline-dark position-inherit" htmlFor="btnradio2">
        Tasks
        <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
          5
        </span> {/* Example badge */}
      </label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" onChange={() => setTabSet('History')} autoComplete="off" />
      <label className="btn btn-outline-dark position-relative" htmlFor="btnradio3">
        History
        <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
          1
        </span> {/* Example badge */}
      </label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio4" onChange={() => setTabSet('Profile')} autoComplete="off" />
      <label className="btn btn-outline-dark position-relative" htmlFor="btnradio4">
        Profile
        <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
          3
        </span> {/* Example badge */}
      </label>
    </div>
  </div>
</div>
</div>

  
        </div>
  {
    TabSet === 'Home' &&
    <HomeTab />
  }
  {
    TabSet === 'Tasks' &&
    <TasksTab />
  }
  {
    TabSet === 'History' &&
    <HistoryTab />
  }
  {
    TabSet === 'Profile' &&
    <ProfileTab />
  }
      <Footer />
    </>
  );
};

export default BusinessListPage;
