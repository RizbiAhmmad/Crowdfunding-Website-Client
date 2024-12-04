import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white px-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl text-teal-400 font-bold">Crowdcube</Link>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/campaigns">All Campaigns</Link></li>
          <li><Link to="/addCampaign">Add Campaign</Link></li>
          <li><Link to="/myCampaigns">My Campaigns</Link></li>
          <li><Link to="/myDonations">My Donations</Link></li>
          
        </ul>
        <button>Login</button>
      </div>
    </nav>
    );
};

export default Navbar;