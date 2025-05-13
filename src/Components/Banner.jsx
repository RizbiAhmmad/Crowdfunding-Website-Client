import React from "react";
import { Link } from "react-router-dom";
import { FaHandsHelping, FaHeartbeat, FaBookOpen, FaHouseDamage } from "react-icons/fa";
import { MdOutlineVisibility, MdGroups, MdTouchApp, MdWaterDrop, MdSchool, MdMedicalServices } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const Banner = () => {
  return (
    <div>
      {/* Why Choose Crowdcube */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Crowdcube?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-xl p-6 rounded-xl text-center hover:shadow-2xl transition">
              <MdOutlineVisibility className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">Track every donation and its impact on your cause.</p>
            </div>
            <div className="bg-white shadow-xl p-6 rounded-xl text-center hover:shadow-2xl transition">
              <MdGroups className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Be a part of a growing community that cares.</p>
            </div>
            <div className="bg-white shadow-xl p-6 rounded-xl text-center hover:shadow-2xl transition">
              <MdTouchApp className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ease of Use</h3>
              <p className="text-gray-600">Create and manage campaigns effortlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaign Categories */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Campaign Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white border p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaHeartbeat className="text-3xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health & Medical</h3>
              <p className="text-gray-600">Support urgent medical procedures, treatments, and outreach.</p>
            </div>
            <div className="bg-white border p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaBookOpen className="text-3xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Fund school supplies, scholarships, and learning access.</p>
            </div>
            <div className="bg-white border p-6 rounded-xl shadow hover:shadow-lg transition">
              <FaHouseDamage className="text-3xl text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Disaster Relief</h3>
              <p className="text-gray-600">Contribute to emergency aid and crisis response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <MdWaterDrop className="text-3xl text-teal-500 mb-2" />
              <h3 className="text-xl font-semibold mb-2">Clean Water Project</h3>
              <p className="text-gray-700">Raised $10,000 to build wells in rural Kenya.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <MdSchool className="text-3xl text-teal-500 mb-2" />
              <h3 className="text-xl font-semibold mb-2">School Supplies Drive</h3>
              <p className="text-gray-700">Helped 500+ children with backpacks and books.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <MdMedicalServices className="text-3xl text-teal-500 mb-2" />
              <h3 className="text-xl font-semibold mb-2">Medical Aid for Sarah</h3>
              <p className="text-gray-700">Funded leukemia surgery for a young girl.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white shadow-xl rounded-xl p-6 transform hover:scale-105 transition">
              <FiUsers className="text-3xl text-teal-500 mx-auto mb-2" />
              <h3 className="text-4xl font-bold text-teal-500">1200+</h3>
              <p className="mt-2 text-gray-700">Donors Contributed</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-6 transform hover:scale-105 transition">
              <FaHandsHelping className="text-3xl text-teal-500 mx-auto mb-2" />
              <h3 className="text-4xl font-bold text-teal-500">$2.5M</h3>
              <p className="mt-2 text-gray-700">Funds Raised</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-6 transform hover:scale-105 transition">
              <FaHandsHelping className="text-3xl text-teal-500 mx-auto mb-2" />
              <h3 className="text-4xl font-bold text-teal-500">150+</h3>
              <p className="mt-2 text-gray-700">Campaigns Funded</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-6 transform hover:scale-105 transition">
              <FaHandsHelping className="text-3xl text-teal-500 mx-auto mb-2" />
              <h3 className="text-4xl font-bold text-teal-500">25</h3>
              <p className="mt-2 text-gray-700">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">What People Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: `"Crowdcube made it so easy to fundraise for my community project. We hit our goal in just two weeks!"`,
                name: "Amina K., Campaign Creator",
              },
              {
                quote: `"I love seeing exactly where my donations go. Total transparency and a great platform!"`,
                name: "Jason L., Donor",
              },
              {
                quote: `"This platform helped us raise emergency funds quickly after the flood. Truly a lifesaver."`,
                name: "Maya T., Organizer",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-teal-600">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-500 text-white py-16 px-4 md:px-12 text-center rounded-xl mt-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="mb-6 text-lg">
            Join thousands of people raising funds for meaningful causes. Create your campaign today and start making an impact.
          </p>
          <Link
            to="/addCampaign"
            className="bg-white text-teal-500 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Start Your Campaign
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Banner;
