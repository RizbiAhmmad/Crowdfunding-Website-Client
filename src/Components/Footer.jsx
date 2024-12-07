import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-8">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-teal-500">Crowdcube</h2>
            <p className="text-gray-600">Empowering ideas through crowdfunding.</p>
          </div>

          <div className="flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-primary">Home</a>
            <a href="/campaigns" className="text-gray-700 hover:text-primary">All Campaigns</a>
            <a href="/addCampaign" className="text-gray-700 hover:text-primary">Add Campaign</a>
            
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-700">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>

        

        <div className="text-center mb-4">
          <p className="text-gray-700">Contact us: support@crowdcube.com</p>
          <p className="text-gray-700">Phone: +880-123-456789</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Crowdcube. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
