import React, { useEffect, useState } from 'react';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`bg-cover bg-center h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container mx-auto flex flex-col justify-center h-full">
        <h1 className={`text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:pl-20 text-center md:text-left transition-transform duration-1000 ${isLoaded ? 'translate-y-0' : 'translate-y-8'}`}>
          Your Spiritual Guide. <br /> Welcome to <span className="text-sitegreen">Yoga Retreat</span>
        </h1>
        <p className={`text-base md:text-xl lg:text-xl xl:text-xl text-white 2xl:pl-20 mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-center md:text-left transition-transform duration-1000 ${isLoaded ? 'translate-y-0' : 'translate-y-6'}`}>
          Yoga Retreat is a gathering of people who are joining together <br /> to practice yoga in a group setting.
        </p>
        <div className={`flex items-center text-base md:text-xl lg:text-xl xl:text-2xl text-white 2xl:pl-20 justify-center md:justify-start transition-transform duration-1000 ${isLoaded ? 'translate-y-0' : 'translate-y-4'}`}>
          <svg className="mr-2 h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <p className="text-sm md:text-base lg:text-base xl:text-lg">Tamia, Bhopal | Rishikesh, Uttarakhand</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
