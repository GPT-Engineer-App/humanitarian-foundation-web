import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">HUFIDA</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 navbar-list">
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;