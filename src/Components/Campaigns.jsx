import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="container mx-auto px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center text-teal-600 mb-8"
      >
        All Campaigns
      </motion.h2>

      {/* Sort Options */}
      <div className="mb-8 flex justify-end items-center">
        <label htmlFor="sort" className="mr-3 font-semibold text-gray-700">
          Sort by Price:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => handleSortChange(e.target.value)}
          className="bg-white border-2 border-teal-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
        >
          <option value="default">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Campaigns Grid */}
      {campaigns.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-12 text-gray-500 text-lg"
        >
          No campaigns available
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign._id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-white to-teal-50 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Campaign Image */}
              <div className="relative">
                <img
                  className="rounded-t-xl object-cover h-56 w-full"
                  src={campaign.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                  alt={campaign.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-3 truncate">
                  {campaign.title}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold">Type:</span> {campaign.type}
                  </p>
                  <p>
                    <span className="font-semibold">Minimum Donation:</span> $
                    {campaign.minDonation}
                  </p>
                  <p>
                    <span className="font-semibold">Deadline:</span>{" "}
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-semibold">Creator:</span>{" "}
                    {campaign.userName}
                  </p>
                </div>
                <div className="mt-5 border-t border-gray-200 pt-4">
                  <Link to={`/campaign/${campaign._id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-teal-600 text-white px-4 py-2.5 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-semibold"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Campaigns;