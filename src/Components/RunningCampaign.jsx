import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const RunningCampaign = () => {
  const campaigns = useLoaderData();
  const limitedCampaigns = campaigns.slice(0, 6);

  return (
    <div className='w-9/12 mx-auto mt-5 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} '>
      <h2 className="text-3xl font-bold text-center mb-8">
        Running Campaigns
      </h2>

      <div className='grid md:grid-cols-3 gap-5 mt-5'>
        {
          limitedCampaigns.map(campaign => (
            <div key={campaign._id}>
              <div className="flex items-center justify-center">
                <article className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <div>
                    <img
                      className="p-1 rounded-2xl object-cover h-64 w-full"
                      src={campaign.image}
                      alt={campaign.title}
                    />
                  </div>

                  <div className="flex flex-col gap-1 mt-4 px-4">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-black">
                      {campaign.title}
                    </h2>
                    <span className="font-normal text-gray-600 dark:text-black">Type:
                      {campaign.type}
                    </span>
                    {/* Display Deadline */}
                    <span className="font-normal text-gray-600 dark:text-black mt-2">
                      Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-4 px-4">
                    <span className="sr-only">Colors available</span>

                    <button
                      aria-label="Yellow"
                      className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"
                    ></button>

                    <button
                      aria-label="Red"
                      className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"
                    ></button>

                    <button
                      aria-label="Blue"
                      className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"
                    ></button>

                    <button
                      aria-label="Black"
                      className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"
                    ></button>
                  </div>

                  <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
                    <button className="w-full items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                      <Link to={`/campaign/${campaign._id}`}>
                        <span className="text-base dark:text-black">Show more</span>
                      </Link>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default RunningCampaign;
