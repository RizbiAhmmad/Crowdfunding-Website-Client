import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCampaign = () => {
  const campaign1 = useLoaderData()
  const {_id, title,type,description,minDonation,deadline,userEmail,userName,image}= campaign1
  return (
    <div>
      update campaign page:{title}
    </div>
  );
};

export default UpdateCampaign;