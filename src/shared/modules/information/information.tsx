"use client"
import LinkIconButton from "@/assets/icon/link-icon-button";
import WorldSvg from "@/assets/svgs/world";
import Input from "@/shared/components";
import Link from "next/link";
import React from "react";

const Information = () => {
  return (
    <div className="relative z-20 mt-10 pb-20 flex justify-center items-center px-6 scroll-hidden">
      <div className="absolute left-0 top-0 opacity-[.7]">
        <WorldSvg />
      </div>
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
        <h2 className="text-white text-5xl font-Popins font-medium text-center mb-8">
          Demande d’information
        </h2>

        {/* information form */}
        <form onSubmit={(e)=>e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input label="non" placeholder="enter your name" />
          <Input label="Prenom" placeholder="Votre prénom" />
          <Input label="Email" placeholder="email@example.com" type="email" />
          <Input
            label="Nom de l’entreprise"
            placeholder="Le nom de votre entreprise"
          />
          <Input label="Type de votre business" placeholder="Type" />
          <Input label="Siret" placeholder="45637XXXXXXX" type="number" />
          <Input
            label="Chiffre d’affaire"
            placeholder="1.0000.000"
            type="number"
          />
          <Input label="Pays" placeholder="France" type="number" />
          <Input
            label="Numéro de téléphone"
            placeholder="(+33) 675 763 445"
            type="number"
          />
          {/* button */}
          <button
            className="w-[219px]  h-[65px] border-2 border-[#42A3FF] mt-4 rounded-[85px] flex items-center justify-center gap-3 cursor-pointer"
          >
            <span className="bg-button-text-gradiant cursor-pointer text-[#4B86FC] text-[20px] font-Popins font-medium">
              COMMENCER
            </span>
            <div className="">
              <LinkIconButton />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Information;
