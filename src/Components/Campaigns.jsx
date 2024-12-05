import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Campaigns = () => {
    const campaigns = useLoaderData();


    return (
        <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
          All Campaigns
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200 shadow-lg">
            <thead>
              <tr className="bg-teal-500 text-white">
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Minimum Donation</th>
                <th className="p-3 border">Deadline</th>
                <th className="p-3 border">Creator</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-500">
                    No campaigns available
                  </td>
                </tr>
              ) : (
                campaigns.map((campaign) => (
                  <tr key={campaign._id} className="text-center">
                    <td className="p-3 border">{campaign.title}</td>
                    <td className="p-3 border">{campaign.type}</td>
                    <td className="p-3 border">${campaign.minDonation}</td>
                    <td className="p-3 border">
                      {new Date(campaign.deadline).toLocaleDateString()}
                    </td>
                    <td className="p-3 border">{campaign.userName}</td>
                    <td className="p-3 border">
                      <button
                       
                        className="btn bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                      >
                        See More
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Campaigns;