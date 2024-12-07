import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CampaignDetails = () => {
  const campaign = useLoaderData();
  const navigate = useNavigate();

  const handleDonate = () => {
    const donation = {
      campaignId: campaign._id, // Campaign's unique ID
      title: campaign.title, // Campaign title
      amount: campaign.minDonation, // Donation amount
    };

    // Retrieve existing donations or initialize an empty array
    const existingDonations = JSON.parse(localStorage.getItem("donations")) || [];

    // Add the new donation to the array
    const updatedDonations = [...existingDonations, donation];

    // Save back to localStorage
    localStorage.setItem("donations", JSON.stringify(updatedDonations));

    // Show success alert
    Swal.fire({
      title: "Donation Successful!",
      text: "Your contribution makes a difference. Thank you!",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Okay",
    });
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto my-8">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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
          className="w-full h-80 rounded-2xl p-2 object-cover"
          src={campaign.image}
          alt={campaign.title}
          loading="lazy"
        />

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-3xl font-semibold text-gray-800 mb-2">{campaign.title}</h3>
          <p className="text-lg text-gray-600 mb-4">{campaign.description}</p>

          {/* Donation Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="text-md text-gray-600">Min Donation:</h4>
              <p className="text-xl font-semibold text-gray-800">${campaign.minDonation}</p>
            </div>
            <div>
              <h4 className="text-md text-gray-600">Deadline:</h4>
              <p className="text-xl font-semibold text-gray-800">{new Date(campaign.deadline).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Type Badge */}
          <div className="mb-6">
            <span className="text-sm text-white bg-teal-500 px-4 py-2 rounded-full uppercase font-bold">
              {campaign.type}
            </span>
          </div>

          {/* Donate Button */}
          <div>
            <button
              onClick={handleDonate} // Trigger donation function
              className="w-full flex justify-center items-center px-4 py-2 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-md transition-colors duration-300"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
