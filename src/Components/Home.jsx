import React from 'react';
import Slider from './Slider';
import Banner from './Banner';
import RunningCampaign from './RunningCampaign';


const Home = () => {
    
    return (
        <div>

            <div className='w-9/12 mx-auto p-5'><Slider></Slider></div>
            <RunningCampaign></RunningCampaign>
            <Banner></Banner>
        </div>
    );
};

export default Home;