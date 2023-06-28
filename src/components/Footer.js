import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white pt-16">
      <div className="container mx-auto pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-12">
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-zinc-400">
              The concept of a yoga retreat is that you take a break from your daily routine and disconnect from the world for a few days. This allows you to have some time with yourself and reconnect with the innermost part of you.
            </p>
          </div>

          
          <div className="mb-8 md:mb-0 2xl:pl-20 xl:pl-20 ">
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="text-zinc-400">
              <li className="pb-2 hover:text-sitegreen">
                <a href="/">About Us</a>
              </li>
              <li className="pb-2 hover:text-sitegreen">
                <a href="/">Treatments</a>
              </li>
              <li className="pb-2 hover:text-sitegreen">
                <a href="/">Our Packages</a>
              </li>
              <li className="pb-2 hover:text-sitegreen">
                <a href="/">Wellness Experts</a>
              </li>
            </ul>
          </div>

          
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-zinc-400">
              <li className="pb-2 hover:text-sitegreen">
                <a href="/">Package 1</a>
              </li>
              <li className="pb-2 hover:text-sitegreen">
                <a href="/">Treatments</a>
              </li>
              <li className="pb-2 hover:text-sitegreen">
                <a href="/">Our Packages</a>
              </li>
              <li className="pb-2 hover:text-sitegreen">
                <a href="/">Wellness Experts</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-zinc-400 pb-4 hover:text-sitegreen">
              Ayushman Retreat, Opp. Balakhnath Mandir, P.O, Laxman Jhoola, Badrinath Rd, Tapovan, Rishikesh, Uttarakhand, 249192, India
            </p>
            <p className="text-zinc-400 pb-2">
              Phone: <span className="hover:text-sitegreen">+91 7203003003</span>
            </p>
            <p className="text-zinc-400">
              Email: <span className="hover:text-sitegreen">rishikesh.he@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      
      <div className="bg-zinc-900 text-center py-4">
        <p className="text-sitegreen">
          &copy; 2023 YogaRetreat | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
