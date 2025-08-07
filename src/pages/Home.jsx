import React from 'react';
import Hero from '../components/hero';
import FeatureDestination from '../components/FeatureDestination';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';
import AllRooms from './AllRooms';

const Home = () => {
  return (
    <>
        <Hero/>
        <FeatureDestination/>

        <ExclusiveOffers/>
       
        <Testimonial/>
        
        <NewsLetter/>

        
    </>
  );
}

export default Home;
