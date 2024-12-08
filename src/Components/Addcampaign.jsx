import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../provider/AuthProvider';

const Addcampaign = () => {
  const { user } = useContext(AuthContext);
  const handleAddCampaign = event => {
    event.preventDefault();
    console.log('Form submitted');

    const form = event.target;

    const title=form.title.value;
    const type=form.type.value;
    const description=form.description.value;
    const minDonation=form.minDonation.value;
    const deadline=form.deadline.value;
    const userName = user?.displayName || "Anonymous";
  const userEmail = user?.email || "No email provided";
    
    const image=form.image.value;

    const newCampaign={title,type,description,minDonation,deadline,userEmail,userName,image };

    // Send data to the server
    console.log(newCampaign);
    fetch('https://tulip-server.vercel.app/campaign',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCampaign)
    })
    .then (res => res.json())
    .then (data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Campaign Added Successfully',
          icon: 'success',
          confirmButtonText: 'Close'
        })
      }
    })

  };

    return (
        <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-teal-500 mb-6">
        Add New Campaign
      </h2>
      <form onSubmit={handleAddCampaign}
       
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
      >
       
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
          <label className="block font-medium mb-1">User Name</label>
          <input
            type="text"
            name="userName"
            value={user?.displayName || ""}
           placeholder="User Name"
            className="input input-bordered w-full bg-gray-100"
            readOnly

          />
        </div>
        <div>
          <label className="block font-medium mb-1">User Email</label>
          <input
            type="email" placeholder="email@example.com"
            name="userEmail"
            value={user?.email || ""}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>
        
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