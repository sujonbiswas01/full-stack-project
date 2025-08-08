import React from "react";
import Hero from "@/shared/modules/hero";
import Pricing from "@/shared/modules/pricing";
import API from "@/shared/modules/api";
import Clients from "@/shared/modules/clients/clients";
import Information from "@/shared/modules/information/information";
import ShadowSvg from "@/assets/svgs/shadow-svg";

const page = () => {
  return (
    <div className="overflow-x-hidden ">
      <Hero />
      <Pricing />
      <API />
      <Clients/>
      <div className="relative scroll-hidden overflow-hidden ">
        <div className="absolute left-0 top-0 ">
          <ShadowSvg/>
        </div>
        <Information/>
        <div className="absolute right-0 rotate-180 top-0">
          <ShadowSvg/>
        </div>
      </div>
      
    </div>
  );
};

export default page;
