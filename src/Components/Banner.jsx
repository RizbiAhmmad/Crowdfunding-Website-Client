import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* Extra Section 1 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Crowdcube?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                Track every donation and its impact on your cause.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">
                Be a part of a growing community that cares.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Ease of Use</h3>
              <p className="text-gray-600">
                Create and manage campaigns effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2 */}
      <section className="bg-teal-500 text-white py-12 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="mb-6">
            Join thousands of people raising funds for meaningful causes. Create
            your campaign today and start making an impact.
          </p>
          <Link
            to="/addCampaign"
            className="bg-white text-teal-500 px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Start Your Campaign
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
