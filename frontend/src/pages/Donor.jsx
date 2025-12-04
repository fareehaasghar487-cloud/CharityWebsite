import React from "react";

import Hero from "../components/donor/Hero";
import CorporateServ from "../components/donor/CorporateServ";

import LatestCampaign from "../components/donor/LatestCampaign";
import PayOptione from "../components/donor/PayOptione";
import MoneyPurs from "../components/donor/MoneyPurs";
import WhyDonate from "../components/donor/WhyDonate";

const Donor = () => {
  return (
    <div>
      <Hero />
      <CorporateServ />
      <PayOptione />
      <LatestCampaign />
      <MoneyPurs />
      <WhyDonate />
    </div>
  );
};

export default Donor;
