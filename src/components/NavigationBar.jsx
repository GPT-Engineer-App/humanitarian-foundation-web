import React from 'react';

const NavigationBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">HUFIDA</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a>About Us</a></li>
          <li><a>Projects</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
          <li><a>News</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;