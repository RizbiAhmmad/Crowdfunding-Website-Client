import React, { useEffect, useState } from "react";

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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Donations</h1>

      {donations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4 bg-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">{donation.title || "Untitled Campaign"}</h3>
                <p className="text-sm text-gray-600 mt-2">Amount: ${donation.amount || 0}</p>
                <p className="text-sm text-gray-600 mt-2">Campaign Type: {donation.type || "N/A"}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Deadline: {donation.deadline ? new Date(donation.deadline).toLocaleDateString() : "No Deadline"}
                </p>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <button
                  onClick={() => handleRemoveDonation(index)}
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Remove Donation
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600">No donations yet.</p>
      )}

      {donations.length > 0 && (
        <div className="mt-6 text-right">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Donations: ${totalAmount.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyDonations;
