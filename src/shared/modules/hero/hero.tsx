import LinkIconButton from "@/assets/icon/link-icon-button";
import HeroCharacter from "@/assets/svgs/hero-character";
import HeroHandCharacter from "@/assets/svgs/hero-hand-character";
import SupportModulesCharacter from "@/assets/svgs/support-mudule";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
    <div className="w-full px-2 md:px-10 h-[90vh] md:flex items-center bg-hero-gradiant relative">
      <div className="md:w-[50%] w-full relative z-10">
        <h1 className="font-Popins font-[700] text-5xl leading-[70.5px] tracking-[0%]">
          {" "}
          <span className="bg-linear-to-r from-[#4B86FC] to-[#75F2F6] text-transparent bg-clip-text">
            MyPay
          </span>{" "}
          Plateforme de gestion de paiements en ligne pour business High-Risk.
        </h1>
        <p className="w-full md:w-[75%] font-Popins text-sm text-[#e1e1e1] font-medium">
          Business High-Risk pris en charge : Servitia Financia et Investitiones
          , Mercator es titulorum Pecuniae mutuatae ad diem Mercatores cryptae
          valutarum. Servitia Financia et Investitiones , Mercator es titulorum
          Pecuniae mutuatae ad diem Mercatores cryptae valutarum.
        </p>

        {/* button */}
        <Link href={'/'} className="w-[219px]  h-[65px] border-2 border-[#42A3FF] mt-4 rounded-[85px] flex items-center justify-center gap-3">
            <span className="bg-button-text-gradiant text-[#4B86FC] text-[20px] font-Popins font-medium">
                COMMENCER
            </span>
            <div className="">
                <LinkIconButton/>
            </div>
             
            
        </Link>
      </div>
      <div className="md:w-[50%] w-full flex justify-center relative z-10">
        <HeroCharacter/>
        <div className="absolute right-[-5%] top-[50%]">
            <HeroHandCharacter/>
        </div>
      </div>
    </div>

    <div className="">
        <div className="text-center">
            <p className="text-[#DCDCDC] text-3xl font-Popins font-semibold ">
                Nos supports de paiement
            </p>
            <Marquee>
                 <SupportModulesCharacter/>
            </Marquee>
               
            
        </div>
    </div>
    </>
  );
};

export default Hero;
