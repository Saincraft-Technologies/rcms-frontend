import React, {Fragment, useContext} from "react";
import { Outlet, Link, Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {

    // const user = useContext(UserContext);

    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

export default ProtectedRoute;