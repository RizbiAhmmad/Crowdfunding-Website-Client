import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const RunningCampaign = () => {
  const campaigns = useLoaderData();
  const limitedCampaigns = campaigns.slice(0, 6);

  return (
    <div className='w-9/12 mx-auto my-5 '>
      <h2 className="text-3xl font-bold text-center mb-8">
        Running Campaigns
      </h2>

      <div className='grid md:grid-cols-3 gap-5 mt-5'>
        {limitedCampaigns.map((campaign, index) => (
          <motion.div
            key={campaign._id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="transition-transform"
          >
            <article className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
              <img
                className="p-1 rounded-2xl object-cover h-64 w-full transition-all duration-300 hover:scale-105"
                src={campaign.image}
                alt={campaign.title}
              />

              <div className="flex flex-col gap-1 mt-4 px-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {campaign.title}
                </h2>
                <span className="font-normal text-gray-600">
                  Type: {campaign.type}
                </span>
                <span className="font-normal text-gray-600 mt-2">
                  Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-4 mt-4 px-4">
                <span className="sr-only">Colors available</span>
                {['yellow-500', 'red-500', 'blue-500', 'gray-800'].map((color, i) => (
                  <button
                    key={i}
                    aria-label={color}
                    className={`p-1 border border-gray-200 rounded-full cursor-pointer bg-${color}`}
                  ></button>
                ))}
              </div>

              <div className="mt-4 p-4 border-t border-gray-200">
                <Link to={`/campaign/${campaign._id}`}>
                  <button className="w-full font-bold cursor-pointer hover:underline text-gray-800">
                    Show more
                  </button>
                </Link>
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
