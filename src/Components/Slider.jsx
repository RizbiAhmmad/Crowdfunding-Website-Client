import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://c0.wallpaperflare.com/preview/165/219/726/camera-card-communication-composition.jpg'
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://static.vecteezy.com/system/resources/previews/001/545/686/non_2x/crowdfunding-concept-in-flat-style-vector.jpg'
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://st3.depositphotos.com/2605379/18385/i/450/depositphotos_183851554-stock-photo-idea-and-presentation-concept.jpg'
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://www.nexea.co/wp-content/uploads/2023/04/profit_sharing_plan.webp'
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://st2.depositphotos.com/6741230/43512/v/450/depositphotos_435123070-stock-illustration-business-idea-concept-people-get.jpg'
          alt=""
        />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Slider;