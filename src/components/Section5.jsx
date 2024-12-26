import React from 'react'
import '../App.css';
import image1 from '../../public/images/image1.webp'
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, loop } from 'swiper/modules';


const Section5 = () => {
  return (
    <>
      <Swiper className='w-[100%] min-h-[503px] py-5 flex items-center justify-center'
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className='w-[1590px] h-[503px] flex flex-col gap-[40px]'>
          <img src={image1} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Section5