import React from 'react';
import tamiaImage from '../assets/Tamia2.jpg';
import rishikeshImage from '../assets/rishikesh.png';
import { Link } from 'react-router-dom'

const LocationSection = () => {
  return (
    <section className="py-12 h-auto animate-fade animate-once animate-duration-300 animate-ease-linear xl:mx-16 lg:mx-16 md:mx-16 mx-4 2xl:mx-24">
      <div className='flex-col rounded-2xl overflow-hidden shadow-2xl 
       md:h-80]'>
        <div className='w-full h-10 text-2xl font-bold text-center pt-1  bg-sitegreen opacity-100 text-litegreen
        '>CHOOSE A LOCATION</div>
        <div className='md:flex'>
          <div className='relative md:w-1/2 bg-black  '>
            <Link to="/Tamia" className='hover:opacity-60 z-0 transition-opacity duration-400'>
              <div className='absolute m-auto top-0 bottom-0 left-0 right-0 flex justify-center items-center '>
                <h1 className='text-white text-2xl font-semibold text-center font z-10'>Tamia, <br />Madhya Pradesh</h1>
              </div>
              <img src={tamiaImage} className='w-full h-full object-fill ' alt='tamiaImage' />
            </Link>
          </div>
          <div className='relative md:w-1/2 bg-black '>
            <Link to='/Rishikesh' className='hover:opacity-60 z-0 transition-opacity duration-400'>
              <div className='absolute m-auto top-0 bottom-0 left-0 right-0 flex justify-center items-center '>
                <h1 className='text-white text-2xl font-semibold text-center font z-10'>Rishikesh, <br />Uttrakhand</h1>
              </div>
              <img src={rishikeshImage} className='w-full h-full  object-fill hover:opacity-60 z-0 transition-opacity duration-400' alt='rishikeshImage' />
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;
