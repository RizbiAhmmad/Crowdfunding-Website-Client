import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const savedDonations = JSON.parse(localStorage.getItem("donations")) || [];
    setDonations(savedDonations);
  }, []);

  const handleRemoveDonation = (index) => {
    const updatedDonations = donations.filter((_, i) => i !== index);
    localStorage.setItem("donations", JSON.stringify(updatedDonations));
    setDonations(updatedDonations);
  };

  const totalAmount = donations.reduce((sum, donation) => {
    return sum + parseFloat(donation.amount || 0);
  }, 0);

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Donations
      </motion.h1>

      {donations.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {donations.map((donation, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-5 bg-gray-50 rounded-t-2xl">
                <h3 className="text-xl font-bold text-gray-800">
                  {donation.title || "Untitled Campaign"}
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  <span className="font-semibold">Amount:</span> ${donation.amount || 0}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Campaign Type:</span> {donation.type || "N/A"}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Deadline:</span>{" "}
                  {donation.deadline
                    ? new Date(donation.deadline).toLocaleDateString()
                    : "No Deadline"}
                </p>
              </div>
              <div className="p-4 bg-white text-center">
                <button
                  onClick={() => handleRemoveDonation(index)}
                  className="text-sm font-medium text-red-500 hover:text-red-700 transition"
                >
                  Remove Donation
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          className="text-lg text-gray-600 text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No donations yet.
        </motion.p>
      )}

      {donations.length > 0 && (
        <motion.div
          className="mt-10 text-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Total Donations: ${totalAmount.toFixed(2)}
          </h2>
        </motion.div>
      )}
    </div>
  );
};

export default MyDonations;
