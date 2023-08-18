import React from 'react';
import virtual from '../assets/Virtual.jpg'

const Facilities = () => {
  return (
    <section className='mt-20'>
      <div className='mx-4 text-center'>
        {/* Heading and desc.  */}
        <h1 className='text-4xl font-bold text-[#AFC289]'>Facilities we Offer</h1>
        <p className='text-lg mt-10 text-center mx-2
        md:mx-12
        lg:mx-20
        xl:mx-32
        2xl:mx-48'>
          The accommodation will be in one of the best and cleanest spaces in the whole of Rishikesh, Uttrakhand or Tamia, Madhya Pradesh. Whether you are on a vacation or on a yoga course, amenities make life a little easier when you are away from home. For different types of travel, there are amenities that are more important than other ones.
          <br/><br/>
          We provide two types of accommodation: private and twin shared rooms. Participants, according to their preference, can choose accommodation. In the room, clean bed sheets, blankets, and pillows will be provided. Every room has an attached bathroom, beautiful garden area, dining area, Yoga hall, Ayurveda massage corner. The complete center campus has unlimited high bandwidth Wi-Fi service.
        </p>
      </div>
      <div className='flex flex-col items-center justify-items-center mx-auto mt-12 w-[80%]
      lg:flex-row lg:flex-wrap lg:w-[90%]
      xl:w-[80%]
      2xl:w-[77%]'>
        {/* Images  */}
        <div className='relative 
        lg:mt-4 lg:w-[32.2%]'>
          <img src={virtual}/>
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 text-lg font-medium bg-[#FEC43C]'>TEMPLATE</div>
        </div>
        <div className='relative mt-4
        lg:w-[32.2%] lg:mx-4'>
          <img src={virtual}/>
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 text-lg font-medium bg-[#FEC43C]'>TEMPLATE</div>
        </div>
        <div className='relative mt-4
        lg:w-[32.2%]'>
          <img src={virtual}/>
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 text-lg font-medium bg-[#FEC43C]'>TEMPLATE</div>
        </div>
        <div className='relative mt-4
        lg:w-[32.2%]'>
          <img src={virtual}/>
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 text-lg font-medium bg-[#FEC43C]'>TEMPLATE</div>
        </div>
        <div className='relative mt-4
        lg:w-[32.2%] lg:mx-4'>
          <img src={virtual}/>
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 text-lg font-medium bg-[#FEC43C]'>TEMPLATE</div>
        </div>
        <div className='relative mt-4
        lg:w-[32.2%]'>
          <img src={virtual}/>
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-7 py-1 text-lg font-medium bg-[#FEC43C]'>TEMPLATE</div>
        </div>
      </div>
      <div>
        {/* Skill Level  */}
      </div>
    </section>
  );
};

export default Facilities;
