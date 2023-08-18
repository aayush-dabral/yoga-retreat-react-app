import React from 'react';
import tamiaImage from '../assets/Tamia2.jpg';
import rishikeshImage from '../assets/rishikesh.jpg';
import virtualImage from '../assets/Virtual.jpg'
import { Link } from 'react-router-dom'

const LocationSection = () => {
  return (
    <section className='my-24'>
      <div className='w-full flex items-center'>
        {/* Choose a location heading */}
        <div className='h-[0.01rem] border-[1px] border-[#9FB376] w-[22%]'>
          {/* Left Line  */}

        </div>
        <div className='text-center border-2 border-[#9FB376] rounded-xl shadow-custom w-[80%] py-3 px-3
        sm:w-[56%] '>
          {/* Main Heading  */}
          <h1 className='text-[#9FB376] text-3xl font-bold '>Choose a Location</h1>
        </div>
        <div className='h-[0.0] border-[1px] border-[#9FB376] w-[22%]'>
          {/* Right Line */}
        </div>
      </div>

      <div className='flex flex-col mx-6 mt-20
      sm:w-2/3 sm:mx-auto
      lg:flex-row lg:w-[90%]
      xl:w-[85%]'>
        <div className='shadow-custom
        lg:w-[70%]'>

          <div className='relative'>
            <div className='h-[260px]'>
              <img src={tamiaImage} className='object-cover w-full h-full'/>
            </div>
            <div className='absolute w-full bg-black bg-opacity-60 bottom-0 text-center h-1/3 flex items-center justify-items-center'>
              <h2 className='text-xl text-white font-medium mx-auto'>Tamia,<br/> Madhya Pradesh</h2>
            </div>
          </div>

          <div className='mx-7 mt-4 mb-10'>
            {/* Description  */}
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, jjlorem ipsum is here.</p>
            <Link to='/tamia'><p className='text-lg underline text-[#A5BA77] mt-4 text-center'>Explore More....</p></Link>
          </div>
        </div>

        <div className='shadow-custom mt-12
        lg:mt-0 lg:w-[70%] lg:mx-12'>
          
          <div className='relative'>
            <div className='h-[260px]'>
              <img src={rishikeshImage} className='object-cover w-full h-full'/>
            </div>
            <div className='absolute w-full bg-black bg-opacity-60 bottom-0 text-center h-1/3 flex items-center justify-items-center'>
              <h2 className='text-xl text-white font-medium mx-auto'>Rishikesh,<br/> Uttarakhand</h2>
            </div>
          </div>

          <div className='mx-7 mt-4 mb-10'>
            {/* Description  */}
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, jjlorem ipsum is here.</p>
            <Link to='/tamia'><p className='text-lg underline text-[#A5BA77] mt-4 text-center'>Explore More....</p></Link>
          </div>
        </div>

        <div className='shadow-custom mt-12
        lg:mt-0 lg:w-[70%]'>
          
          <div className='relative'>
            <div className='h-[260px]'>
              <img src={virtualImage} className='object-cover w-full h-full'/>
            </div>
            <div className='absolute w-full bg-black bg-opacity-60 bottom-0 text-center h-1/3 flex items-center justify-items-center'>
              <h2 className='text-xl text-white font-medium mx-auto'>Virtual<br/> Sessions</h2>
            </div>
          </div>

          <div className='mx-7 mt-4 mb-10'>
            {/* Description  */}
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, jjlorem ipsum is here.</p>
            <Link to='/tamia'><p className='text-lg underline text-[#A5BA77] mt-4 text-center'>Explore More....</p></Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;
































// <section className="py-12 h-auto animate-fade animate-once animate-duration-300 animate-ease-linear xl:mx-16 lg:mx-16 md:mx-16 mx-4 2xl:mx-24">
    //   <div className='flex-col rounded-2xl overflow-hidden shadow-2xl
    //    md:h-80]'>
    //     <div className='w-full h-10 text-2xl font-bold text-center pt-1  bg-sitegreen opacity-100 text-litegreen
    //     '>CHOOSE A LOCATION</div>
    //     <div className='md:flex'>
    //       <div className='relative md:w-1/2 bg-black  '>
    //         <Link to="/Tamia" className='hover:opacity-60 z-0 transition-opacity duration-400'>
    //           <div className='absolute m-auto top-0 bottom-0 left-0 right-0 flex justify-center items-center '>
    //             <h1 className='text-white text-2xl font-semibold text-center font z-10'>Tamia, <br />Madhya Pradesh</h1>
    //           </div>
    //           <img src={tamiaImage} className='w-full h-full object-fill ' alt='tamiaImage' />
    //         </Link>
    //       </div>
    //       <div className='relative md:w-1/2 bg-black '>
    //         <Link to='/Rishikesh' className='hover:opacity-60 z-0 transition-opacity duration-400'>
    //           <div className='absolute m-auto top-0 bottom-0 left-0 right-0 flex justify-center items-center '>
    //             <h1 className='text-white text-2xl font-semibold text-center font z-10'>Rishikesh, <br />Uttrakhand</h1>
    //           </div>
    //           <img src={rishikeshImage} className='w-full h-full  object-fill hover:opacity-60 z-0 transition-opacity duration-400' alt='rishikeshImage' />
    //         </Link>

    //       </div>
    //     </div>

    //   </div>
    // </section>
