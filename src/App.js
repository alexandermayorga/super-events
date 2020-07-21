import React from 'react';
import "resources/styles.css"
import Header from 'components/header_footer/Header'
import Featured from 'components/Featured/Featured'
import VenueNfo from 'components/VenueNfo/VenueNfo'
import Highlights from 'components/Highlights/Highlights';
import Pricing from 'components/Pricing/Pricing';
import Location from 'components/Location/Location';
import Footer from 'components/header_footer/Footer';
import {Element as ScrollerTarget} from "react-scroll"

function App() {
  return (
    <div>
      <Header/>
      
      <ScrollerTarget name="Featured">
        <Featured/>
      </ScrollerTarget>

      
      <ScrollerTarget name="VenueNfo">
        <VenueNfo/>
      </ScrollerTarget>

      <ScrollerTarget name="Highlights">
        <Highlights/>
      </ScrollerTarget>
      
      <ScrollerTarget name="Pricing">
        <Pricing/>
      </ScrollerTarget>

      
      <ScrollerTarget name="Location">
        <Location/>
      </ScrollerTarget>

      <Footer/>
    </div>
  );
}

export default App;
