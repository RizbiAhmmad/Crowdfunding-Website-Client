import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CampaignDetails = () => {
    const Campaign = useLoaderData();
    return (
        <div>
            CampaignDetails: {Campaign.title}
        </div>
    );
};

export default CampaignDetails;