import React, {useState} from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatPopUp from '../components/ChatPopUp';
import CookieBanner from '../components/CookieBanner';
import BusinessesTab from '../components/HomeTabs/BusinessesTab';
import CollectionsTab from '../components/HomeTabs/CollectionsTab';
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
      <div className="d-flex justify-content-center mt-4">
      <div className="col-12">
        <div className="title-button-container">
          <div
            className="btn-group overflow-auto "
            role="group"
            aria-label="Basic radio toggle button group"
            style={{ whiteSpace: 'nowrap', padding: '10px 15px 10px 0px' }}
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              onChange={() => setTabSet('Home')}
              autoComplete="off"
              defaultChecked
            />
            <label className="btn btn-outline-dark position-inherit" htmlFor="btnradio1">
              Businesses
              <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                2
              </span>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              onChange={() => setTabSet('Tasks')}
              autoComplete="off"
            />
            <label className="btn btn-outline-dark position-inherit" htmlFor="btnradio2">
              Collections
              <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                5
              </span>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              onChange={() => setTabSet('History')}
              autoComplete="off"
            />
            <label className="btn btn-outline-dark position-relative" htmlFor="btnradio3">
              History
              <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                1
              </span>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio4"
              onChange={() => setTabSet('Profile')}
              autoComplete="off"
            />
            <label className="btn btn-outline-dark position-relative" htmlFor="btnradio4">
              Profile
              <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                3
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  
        </div>
  {
    TabSet === 'Home' &&
    <BusinessesTab />
  }
  {
    TabSet === 'Tasks' &&
    <CollectionsTab />
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
