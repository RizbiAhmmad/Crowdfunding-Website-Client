import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://tulip-server.vercel.app/campaign?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setCampaigns(data))
        .catch(error => console.error('Error fetching campaigns:', error));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tulip-server.vercel.app/campaign/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your campaign has been deleted.', 'success');
              const remaining = campaigns.filter(c => c._id !== id);
              setCampaigns(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-12 py-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">My Campaigns</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-teal-600 text-white dark:bg-teal-700">
              <th className="p-3 border dark:border-gray-600">Image</th>
              <th className="p-3 border dark:border-gray-600">Title</th>
              <th className="p-3 border dark:border-gray-600">Type</th>
              <th className="p-3 border dark:border-gray-600">Min Donation</th>
              <th className="p-3 border dark:border-gray-600">Deadline</th>
              <th className="p-3 border dark:border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            {campaigns.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500 dark:text-gray-400">
                  No campaigns found.
                </td>
              </tr>
            ) : (
              campaigns.map(campaign => (
                <tr key={campaign._id} className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <td className="p-3 border dark:border-gray-600">
                    <img
                      src={campaign.image || 'https://via.placeholder.com/100x60?text=No+Image'}
                      alt={campaign.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 border dark:border-gray-600">{campaign.title}</td>
                  <td className="p-3 border dark:border-gray-600">{campaign.type}</td>
                  <td className="p-3 border dark:border-gray-600">${campaign.minDonation}</td>
                  <td className="p-3 border dark:border-gray-600">
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </td>
                  <td className="p-3 border dark:border-gray-600">
                    <Link to={`/campaign/${campaign._id}`}>
                      <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-1 rounded mr-2 transition">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 mt-2 rounded transition"
                    >
                      Delete
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

export default MyCampaign;
