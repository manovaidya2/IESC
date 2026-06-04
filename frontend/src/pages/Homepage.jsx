import React from "react";

import HeroSection from "../hompage/HeroSection";
import EngineeringDisciplines from "../hompage/EngineeringDisciplines";
import WhoWeAreSection from "../hompage/WhoWeAreSection";
import MembershipPathway from "../hompage/MembershipPathway";

function Homepage() {
  return (
    <>
   
      <HeroSection  />
      <EngineeringDisciplines />
      <WhoWeAreSection  />
      <MembershipPathway />
    </>
  );
}

export default Homepage;