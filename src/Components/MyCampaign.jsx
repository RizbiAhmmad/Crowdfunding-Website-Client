import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCampaign = () => {
    const { user } = useContext(AuthContext); // Get authenticated user
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        // Fetch campaigns for the authenticated user
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
                            Swal.fire(
                                'Deleted!',
                                'Your campaign has been deleted.',
                                'success'
                            );
                            const remaining = campaigns.filter(c => c._id !== id);
                            setCampaigns(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">My Campaigns</h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-teal-500 text-white">
                            <th className="p-3 border">Title</th>
                            <th className="p-3 border">Type</th>
                            <th className="p-3 border">Minimum Donation</th>
                            <th className="p-3 border">Deadline</th>
                            <th className="p-3 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center p-4 text-gray-500">
                                    No campaigns found
                                </td>
                            </tr>
                        ) : (
                            campaigns.map(campaign => (
                                <tr key={campaign._id} className="text-center">
                                    <td className="p-3 border">{campaign.title}</td>
                                    <td className="p-3 border">{campaign.type}</td>
                                    <td className="p-3 border">${campaign.minDonation}</td>
                                    <td className="p-3 border">
                                        {new Date(campaign.deadline).toLocaleDateString()}
                                    </td>
                                    <td className="p-3 border">
                                        <Link to={`/campaign/${campaign._id}`}>
                                        <button
                                            className="btn bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 mr-2"
                                            onClick={() => console.log('Update functionality here')}
                                        >
                                            Update
                                        </button>
                                        </Link>
                                        <button
                                            className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => handleDelete(campaign._id)}
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
