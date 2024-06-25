import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="footer-title">Contact Us</span>
        <p>1234 HUFIDA Street, Nairobi, Kenya</p>
        <p>Email: info@hufida.org</p>
        <p>Phone: +254 700 000 000</p>
      </div>
      <div>
        <span className="footer-title">Follow Us</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram icon" />
          </a>
        </div>
      </div>
      <div>
        <span className="footer-title">Subscribe</span>
        <form>
          <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-primary mt-2">Subscribe</button>
        </form>
      </div>
      <div>
        <span className="footer-title">Quick Links</span>
        <a href="#" className="link link-hover">Privacy Policy</a>
        <a href="#" className="link link-hover">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;