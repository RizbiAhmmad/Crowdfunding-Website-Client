import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
const CampaignDetails = () => {
    const Campaign = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className='w-1/2 mx-auto my-5'>
        <div className=" relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 bg-gray-100 text-gray-700 rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-200"
          aria-label="Go back"
        >
          <i className="fa-solid fa-arrow-left"></i>Back
        </button>
  
        {/* Card Image */}
        <img
          className="w-full h-96 rounded-2xl p-2 object-cover"
          src={Campaign.image}
          loading="lazy"
        />
  
        {/* Card Content */}
        <div className="p-5 text-center">
          <h3 className="text-xl font-semibold text-gray-800">{Campaign.title}</h3>
          <h2 className="mt-2 text-sm text-gray-600 line-clamp-3">{Campaign.description}</h2>
          <h2 className="mt-2 text-sm text-gray-600 line-clamp-3">{Campaign.minDonation}</h2>
          <h2 className="mt-2 text-sm text-gray-600 line-clamp-3">{Campaign.deadline}</h2>
          
          <div className="mt-4">
            <span className="text-sm text-white bg-teal-500 px-3 py-1 rounded-full">
              {Campaign.type}
            </span>
          </div>
          <div className="mt-6">
            <Link
              to={`/campaign/${Campaign._id}`}
              className="w-full flex justify-center items-center px-4 py-2 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors duration-300"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
};

export default CampaignDetails;