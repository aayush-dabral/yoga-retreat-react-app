import React from 'react';
import wellnessBg from '../assets/wellnessbg.png';

const AboutWellnessExpert = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${wellnessBg})` }}></div>
      <div className="relative py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-black bg-white bg-opacity-70 p-8 rounded-3xl">
          <h2 className="text-4xl font-bold mb-4 text-sitegreen">About Our Wellness Expert</h2>

            <p className="text-lg mb-8">
            Dr. Nandlal Kothari is a highly respected naturopath who has been working in the field of wellness and preventive medicine since 1999. With extensive knowledge in the areas of diet therapy, yogic breath therapy, nature cure treatments, and Panchkarma, he has helped countless people around the world achieve optimal health and well-being.
            </p>
            <p className="text-lg mb-8 ">
            Dr. Kothari is a graduate in naturopathy (BYN), has a postgraduate degree in life sciences, and holds a diploma in nutrition and Panchkarma. He is a renowned expert in his field and has been traveling around the globe spreading health awareness and self-cure through lectures, workshops, and one-on-one counseling.
            </p>
            <p className="text-lg">
            Dr. Kothari's approach to natural healing is rooted in the belief that the body has the inherent ability to heal itself. He emphasizes the importance of a balanced diet, healthy lifestyle habits, and natural therapies to help individuals achieve optimal health and well-being. His expertise in diet therapy, yogic breath therapy, and nature cure treatments and Panchkarma has helped many people overcome various health issues and achieve a state of wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWellnessExpert;
