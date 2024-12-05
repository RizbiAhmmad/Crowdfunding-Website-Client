import React from 'react';

const Addcampaign = () => {
    return (
        <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
        Add New Campaign
      </h2>
      <form
       
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Campaign Title</label>
          <input
            type="text"
            name="title"
            
            placeholder="Enter campaign title"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Campaign Type</label>
          <select
            name="type"
           
            className="select select-bordered w-full"
            required
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            
            placeholder="Enter campaign description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-medium mb-1">Minimum Donation Amount</label>
          <input
            type="number"
            name="minDonation"
           
            placeholder="Enter minimum donation amount"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Deadline</label>
          <input
            type="date"
            name="deadline"
            
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">User Email</label>
          <input
            type="email"
           
            className="input input-bordered w-full bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">User Name</label>
          <input
            type="text"
           
            className="input input-bordered w-full bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="btn bg-teal-500 text-white w-full hover:bg-teal-600"
        >
          Add Campaign
        </button>
      </form>
    </div>
    );
};

export default Addcampaign;