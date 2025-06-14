import React, { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import TestImoniel from "../components/TestImoniel";
import NewLetter from "../components/NewLetter";

const Home = () => {
  
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers/>
      <TestImoniel/>
      <NewLetter/>
    </>
  );
};

export default Home;
