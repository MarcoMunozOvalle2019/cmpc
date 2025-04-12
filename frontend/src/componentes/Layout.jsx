import { Navigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import AuthService from "../services/auth.service";

const Layout = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    
    useEffect(() => {
        const getData = async () => {
        let token = await AuthService.getCurrentUser();
        if (token) {
          setCurrentUser(token);
        }
    }
    getData()    
    }, []);
    

  return (
    <>
        <div>
            {currentUser ? (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Navigate to={"/LoginUser"} className="nav-link"/>
                    </li>
                </div>
            ):
            (
                <Navigate to="/loginUser"/>
            )}
        </div>
    </>
  )
};

export default Layout;
