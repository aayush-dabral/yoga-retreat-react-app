import React from 'react';
import teamMember1Image from '../assets/team-member1.png';
import teamMember2Image from '../assets/team-member1.png';
import teamMember3Image from '../assets/team-member1.png';

const TeamMembersSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-sitegreen">Team Members</h2>
        <p className="text-lg mb-8 px-4">Meet our talented and dedicated team members who are passionate about promoting wellness and guiding individuals towards a healthier lifestyle.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 xl:gap-16 px-4 lg:px-0 2xl:px-24 pt-6">
          <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <img src={teamMember1Image} alt="Team Member 1" className="w-full h-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Dr. Nandita</h4>
            <p className="text-gray-600">Yoga Instructor</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <img src={teamMember2Image} alt="Team Member 2" className="w-full h-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Dr. Nandita</h4>
            <p className="text-gray-600">Nutritionist</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <img src={teamMember3Image} alt="Team Member 3" className="w-full h-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Dr. Nandita</h4>
            <p className="text-gray-600">Wellness Coach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
