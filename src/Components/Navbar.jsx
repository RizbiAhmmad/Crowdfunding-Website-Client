import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
      
        <div>
          <Link to="/" className="text-2xl text-teal-400 font-bold">Crowdcube</Link>
        </div>

      
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campaigns">All Campaigns</Link></li>
            <li><Link to="/addCampaign">Add Campaign</Link></li>
            <li><Link to="/myCampaigns">My Campaigns</Link></li>
            <li><Link to="/myDonations">My Donations</Link></li>
          </ul>
        </div>

      
        <div>
          <button>Login</button>
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4 space-y-4">
          <ul>
            <li><Link to="/" className="block text-white">Home</Link></li>
            <li><Link to="/campaigns" className="block text-white">All Campaigns</Link></li>
            <li><Link to="/addCampaign" className="block text-white">Add Campaign</Link></li>
            <li><Link to="/myCampaigns" className="block text-white">My Campaigns</Link></li>
            <li><Link to="/myDonations" className="block text-white">My Donations</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
