import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      
      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
          <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
          <textarea placeholder="Message" className="textarea textarea-bordered w-full max-w-xs"></textarea>
          <button className="btn btn-primary">Send</button>
        </form>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
        <p>1234 HUFIDA Street, Nairobi, Kenya</p>
        <p>Email: info@hufida.org</p>
        <p>Phone: +254 700 000 000</p>
        <p>Email for Donations: donations@hufida.org</p>
        <p>Email for Volunteering: volunteer@hufida.org</p>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size="24" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter size="24" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size="24" /></a>
        </div>
      </section>
    </div>
  );
};

export default Contact;