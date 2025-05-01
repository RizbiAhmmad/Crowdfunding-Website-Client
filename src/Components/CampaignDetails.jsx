import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CampaignDetails = () => {
  const campaign = useLoaderData();
  const navigate = useNavigate();

  const handleDonate = () => {
    const donation = {
      campaignId: campaign._id,
      title: campaign.title || "Untitled Campaign",
      amount: campaign.minDonation || 0,
      type: campaign.type || "General",
      deadline: campaign.deadline || new Date().toISOString(),
    };

    const existingDonations = JSON.parse(localStorage.getItem("donations")) || [];
    const updatedDonations = [...existingDonations, donation];

    localStorage.setItem("donations", JSON.stringify(updatedDonations));

    Swal.fire({
      title: "Donation Successful!",
      text: "Your contribution makes a difference. Thank you!",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Okay",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10 bg-gradient-to-br from-green-100 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-xl overflow-hidden"
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/80 text-gray-800 hover:bg-white hover:shadow-lg p-2 rounded-full transition"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <motion.img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-80 object-cover rounded-t-xl"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="p-6 text-gray-800">
          <h3 className="text-3xl font-bold mb-2">{campaign.title || "Untitled Campaign"}</h3>
          <p className="text-md text-gray-600 mb-4">{campaign.description || "No description provided."}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-hand-holding-dollar text-green-600 text-xl"></i>
              <div>
                <p className="text-sm text-gray-600">Min Donation</p>
                <p className="text-lg font-semibold">${campaign.minDonation || 0}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-clock text-blue-600 text-xl"></i>
              <div>
                <p className="text-sm text-gray-600">Deadline</p>
                <p className="text-lg font-semibold">
                  {campaign.deadline ? new Date(campaign.deadline).toLocaleDateString() : "No Deadline"}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <span className="inline-block bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
              {campaign.type || "General"}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDonate}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white text-lg font-semibold py-2 rounded-md shadow-md transition-all"
          >
            <i className="fa-solid fa-heart-circle-plus mr-2"></i> Donate Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CampaignDetails;
