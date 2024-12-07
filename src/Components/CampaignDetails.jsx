import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import "@fortawesome/fontawesome-free/css/all.min.css";

const CampaignDetails = () => {
  const campaign = useLoaderData();
  const navigate = useNavigate();

  const handleDonate = () => {
    // Trigger SweetAlert2 on button click
    Swal.fire({
        title: "Donation Successful!",
        text: "Your contribution makes a difference. Thank you!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Okay",
      });
      
  };

  return (
    <div className="w-1/2 mx-auto my-5">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 bg-gray-100 text-gray-700 rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors duration-200"
          aria-label="Go back"
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>

        {/* Card Image */}
        <img
          className="w-full h-96 rounded-2xl p-2 object-cover"
          src={campaign.image}
          alt={campaign.title}
          loading="lazy"
        />

        {/* Card Content */}
        <div className="p-5 text-center">
          <h3 className="text-xl font-semibold text-gray-800">{campaign.title}</h3>
          <h2 className="mt-2 text-sm text-gray-600">{campaign.description}</h2>
          <h2 className="mt-2 text-sm text-gray-600">Min Donation: {campaign.minDonation}</h2>
          <h2 className="mt-2 text-sm text-gray-600">Deadline: {campaign.deadline}</h2>

          <div className="mt-4">
            <span className="text-sm text-white bg-teal-500 px-3 py-1 rounded-full">
              {campaign.type}
            </span>
          </div>

          {/* Donate Button */}
          <div className="mt-6">
            <button
              onClick={handleDonate} // Call the function when clicked
              className="w-full flex justify-center items-center px-4 py-2 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors duration-300"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
