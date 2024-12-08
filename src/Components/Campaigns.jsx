import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Campaigns = () => {
  const campaignsData = useLoaderData();
  const [campaigns, setCampaigns] = useState(campaignsData);
  const [sortOrder, setSortOrder] = useState('default');

  const handleSortChange = (order) => {
    setSortOrder(order);

    if (order === 'asc') {
      setCampaigns([...campaigns].sort((a, b) => a.minDonation - b.minDonation));
    } else if (order === 'desc') {
      setCampaigns([...campaigns].sort((a, b) => b.minDonation - a.minDonation));
    } else {
      setCampaigns(campaignsData); // Reset to original data
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
        All Campaigns
      </h2>

      {/* Sort Options */}
      <div className="mb-4 text-right">
        <label htmlFor="sort" className="mr-2 font-medium text-gray-700">
          Sort by Price:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => handleSortChange(e.target.value)}
          className="select select-bordered"
        >
          <option value="default">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Campaigns Table */}
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
                    <Link
                      to={`/campaign/${campaign._id}`}
                      className="btn bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                    >
                      See More
                    </Link>
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
