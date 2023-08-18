import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlainSection from './components/PlainSection';
import LocationSection from './components/LocationSection';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Tamia from './components/Tamia/Tamia';
import Rishikesh from './components/Rishikesh/Rishikesh';
import WellnessExpertSection from './components/WellnessExpertSection ';
import Facilities from './components/Facilities';
import TeamMembersSection from './components/TeamMembersSection';
import AboutWellnessExpert from './components/AboutWellnessExpert';
import Footer from './components/Footer';

import ScrollToTop from './helpers/ScrollToTop';

const App = () => {
  return (
    <div>

      <Router>        
        <Routes>
          <Route exact path='/' element={<>
            <Navbar bg={'bg-white'} before={'bg-transparent'} border={''}/>
            <HeroSection />
            <PlainSection />
            <LocationSection />
            <WellnessExpertSection />
            <Facilities />
            <TeamMembersSection />
            <AboutWellnessExpert />
            <Footer />
          </>
          } />
          <Route exact path='/Tamia' element={<><ScrollToTop /><Navbar bg={'bg-litegreen'} before={'bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg duration-1000'} border={'border-2'}/><Tamia /></>} />
          <Route exact path='/Rishikesh' element={<><Navbar bg={'bg-litegreen'}/><ScrollToTop /><Rishikesh /></>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
