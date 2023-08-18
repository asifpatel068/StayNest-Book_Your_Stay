import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            StayNest
          </Link>
        </li>
        <li>
          <Link to="/">All Properties</Link>
        </li>
        <li>
          <Link to="/HostLogin">Host Login</Link>
        </li>

        <li>
          <Link to="/LoginSignup">Guest Login</Link>
        </li>

        <li>
          <Link to="/bookings">Bookings</Link>
        </li>

        <li className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
