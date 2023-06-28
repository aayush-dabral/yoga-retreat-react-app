import React from 'react';
import wellnessImage from '../assets/wellness-image.png';

const WellnessExpertSection = () => {
  return (
    <section className="bg-litegreen py-10 rounded-3xl shadow-xl xl:mx-16 lg:mx-16 md:mx-16 mx-4 2xl:mx-24">
      <div className="container px-4">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-4 text-sitegreen">About Our Wellness Expert</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={wellnessImage} alt="wellness" className="w-full max-w-md mx-auto sm:pt-12" />
          </div>
          <div className="md:w-1/2 md:pl-10 2xl:pr-20">
            <p className="text-base md:text-lg text-center md:text-left sm:pt-12">
              Dr. Nandlal Kothari is a highly respected naturopath who has been working in the field of wellness and preventive medicine since 1999. With extensive knowledge in the areas of diet therapy, yogic breath therapy, nature cure treatments, and Panchkarma, he has helped countless people around the world achieve optimal health and well-being.
              <br /><br />
              Dr. Kothari is a graduate in naturopathy (BYN), has a postgraduate degree in life sciences, and holds a diploma in nutrition and Panchkarma. He is a renowned expert in his field and has been traveling around the globe spreading health awareness and self-cure through lectures, workshops, and one-on-one counseling.
              <br /><br />
              Dr. Kothari's approach to natural healing is rooted in the belief that the body has the inherent ability to heal itself. He emphasizes the importance of a balanced diet, healthy lifestyle habits, and natural therapies to help individuals achieve optimal health and well-being. His expertise in diet therapy, yogic breath therapy, and nature cure treatments and Panchkarma has helped many people overcome various health issues and achieve a state of wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessExpertSection;
