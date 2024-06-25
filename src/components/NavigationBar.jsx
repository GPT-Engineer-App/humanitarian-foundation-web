import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { logPageView } from '../utils/analytics';
import { FaChevronDown } from 'react-icons/fa';

const NavigationBar = () => {
  const location = useLocation();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">HUFIDA</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost m-1" onClick={() => setIsAboutOpen(!isAboutOpen)} aria-haspopup="true" aria-expanded={isAboutOpen}>
                About <FaChevronDown className="ml-1" />
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/partners">Partners</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/projects">Projects</Link></li>
          <li>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost m-1" onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)} aria-haspopup="true" aria-expanded={isGetInvolvedOpen}>
                Get Involved <FaChevronDown className="ml-1" />
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/get-involved">Volunteer</Link></li>
                <li><Link to="/get-involved#donate">Donate</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;