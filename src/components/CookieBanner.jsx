import React, { useState } from 'react';
// import './CookieBanner.css'; // CSS file for custom styling

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleAccept = () => {
    // Handle cookie acceptance logic here
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="cookie-banner">
          <div className="container">
            <div className="row">
            <div className="d-flex align-items-center">
              <div className="col-9 col-md-10 text-center">
                <p>
                  This website uses cookies to ensure you get the best experience. By continuing to browse this site, you
                  agree to our use of cookies.
                </p>
              </div>
              <div className="text-center col-4 col-md-2">
                <button className="accept-button" onClick={handleAccept}>
                  Accept
                </button>
              </div>
            </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
