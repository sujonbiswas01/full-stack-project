import Avatar from "@/assets/icon/avatar";
import QuotesIcon from "@/assets/icon/quotes-icon";
import SupportModulesCharacter from "@/assets/svgs/support-mudule";
import { Logo } from "@/config/constants";
import React from "react";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <p className="text-[#dcdcdc] font-Popins text-5xl font-semibold">
          Nos clients
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Marquee>
          {" "}
          <SupportModulesCharacter />
        </Marquee>
      </div>
      <div className="md:w-[75%] m-auto">
        <div className="w-full p-6 bg-[#171823] rounded-xl shadow-xl">
          <div className="w-full flex justify-center">
            <Logo />
          </div>
          <div className="md:px-8 my-4 flex justify-between">
            <QuotesIcon />
            <QuotesIcon />
          </div>
          <div className="md:px-10 px-4">
            <p className="font-Popins text-xl font-medium text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex my-4 gap-3 justify-center w-full">
            <Avatar />
            <div>
              <h5 className="text-lg font-Popins font-semibold">
                Herman Jensen
              </h5>
              <h6 className="text-sm font-Popins">CEO MyPay</h6>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
