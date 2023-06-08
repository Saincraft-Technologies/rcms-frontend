// responsive bootstrap navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
      setIsCollapsed(!isCollapsed);
    };
    return (
        < >
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        style={{paddingTop:"20px"}}
        >
        <div className="container-fluid cssnav">
        <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? 
        <i class="fas fa-sliders-h" 
        style={{opacity: 0.5}}
        ></i>
        :
        <i class="fas fa-sliders-h"></i>
        // dim version of above icon

        }
      </button>
        <Link className="navbar-brand" to="/">
          RCMS Admin</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-ellipsis-v"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
       
        <li className="nav-item">
        <Link className="nav-link" to="/deposits">
        <i className="fas fa-hand-holding-usd fa "></i>
 Deposits
</Link>
        </li>
        </ul>
        {/* with some space on the right */}
      
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/products">
          {/* power button icon */}
        <i className="fas fa-power-off fa "></i>
  Log Out
</Link>

  </li>
</ul>

        </div>
        </div>
        </nav>

        {/* sidebar */}
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
     
     <div className="sidebar-content">
        
       <ul className="sidebar-nav">
        {/* tutorial */}
        <li className="sidebar-item">
            <Link to="/tutorials">
            <i className="fas fa fa-book "></i>
            {" "} Tutorials</Link>
          </li>

         <li className="sidebar-item">
           <Link to="/settings">
            <i className="fas fa fa-cog "></i>
           {" "} Settings</Link>
         </li>
         <li className="sidebar-item">
           <Link to="/contactus">
            <i className="fa fa-phone "></i>
           {" "} Contact Us</Link>
         </li>
       </ul>
     </div>
   </div>
        </>
    )
    }

export default Navbar