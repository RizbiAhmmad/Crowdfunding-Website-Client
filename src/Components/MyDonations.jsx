import React, { useEffect, useState } from "react";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Retrieve donations from localStorage
    const savedDonations = JSON.parse(localStorage.getItem("donations")) || [];
    setDonations(savedDonations);
  }, []);

  const handleRemoveDonation = (index) => {
    const updatedDonations = donations.filter((_, i) => i !== index);

    // Update localStorage
    localStorage.setItem("donations", JSON.stringify(updatedDonations));

    // Update state
    setDonations(updatedDonations);
  };

  // Ensure totalAmount is always a number before calling toFixed
  const totalAmount = donations.reduce((sum, donation) => {
    return sum + parseFloat(donation.amount || 0); // Make sure to parse donation amount as a number
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
              {/* Card Image */}
              <div className="p-4 bg-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">{donation.title}</h3>
                <p className="text-sm text-gray-600 mt-2">Amount: ${donation.amount}</p>
                <p className="text-sm text-gray-600 mt-2">Campaign Type: {donation.type}</p>
                <p className="text-sm text-gray-600 mt-2">Deadline: {new Date(donation.deadline).toLocaleDateString()}</p>
              </div>

              {/* Update Button */}
              <div className="p-4 bg-gray-50 text-center">
                <button
                  onClick={() => alert("Update functionality is not implemented")}
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Update Donation
                </button>
              </div>

              {/* Remove Button */}
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

      {/* Total Donation Amount */}
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
