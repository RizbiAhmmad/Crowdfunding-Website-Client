import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* Section 1 - Why Choose Crowdcube */}
      <section className="py-12 px-12 bg-white">
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

      {/* Section - Featured Campaign Categories */}
<section className="py-12 px-12 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Featured Campaign Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="border border-gray-300 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Health & Medical</h3>
        <p className="text-gray-600">Support urgent medical procedures, treatments, and health outreach programs.</p>
      </div>
      <div className="border border-gray-300 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <p className="text-gray-600">Fund school supplies, scholarships, and access to learning for all ages.</p>
      </div>
      <div className="border border-gray-300 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Disaster Relief</h3>
        <p className="text-gray-600">Contribute to emergency aid, rebuilding efforts, and crisis response.</p>
      </div>
    </div>
  </div>
</section>
    
      {/* Section 2 - Success Stories */}
      <section className="py-12 px-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Clean Water Project</h3>
              <p className="text-gray-700">
                Raised $10,000 to build wells in rural villages of Kenya.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">School Supplies Drive</h3>
              <p className="text-gray-700">
                Helped 500+ children get backpacks and books for school.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Medical Aid for Sarah</h3>
              <p className="text-gray-700">
                Funded surgery costs for a young girl fighting leukemia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Our Impact in Numbers */}
<section className="py-16 px-6 md:px-12 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
      Our Impact in Numbers
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition">
        <h3 className="text-4xl font-bold text-teal-500">1200+</h3>
        <p className="mt-2 text-gray-700">Donors Contributed</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition">
        <h3 className="text-4xl font-bold text-teal-500">$2.5M</h3>
        <p className="mt-2 text-gray-700">Funds Raised</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition">
        <h3 className="text-4xl font-bold text-teal-500">150+</h3>
        <p className="mt-2 text-gray-700">Campaigns Funded</p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition">
        <h3 className="text-4xl font-bold text-teal-500">25</h3>
        <p className="mt-2 text-gray-700">Countries Reached</p>
      </div>
    </div>
  </div>
</section>


      {/* Section 4 - Testimonials */}
      <section className="py-12 px-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "Crowdcube made it so easy to fundraise for my community project. We hit our goal in just two weeks!"
              </p>
              <p className="mt-4 font-semibold">— Amina K., Campaign Creator</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "I love seeing exactly where my donations go. Total transparency and a great platform!"
              </p>
              <p className="mt-4 font-semibold">— Jason L., Donor</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">
                "This platform helped us raise emergency funds quickly after the flood. Truly a lifesaver."
              </p>
              <p className="mt-4 font-semibold">— Maya T., Organizer</p>
            </div>
          </div>
        </div>
      </section>

       {/* Section 5 - Call to Action */}
       <section className="bg-teal-500 text-white py-12 rounded-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
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
