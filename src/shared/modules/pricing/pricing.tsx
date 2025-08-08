import PaymentMethodCard from "@/assets/svgs/payment-method-card";
import RightMarkIcon from "@/assets/svgs/right-mark-icon";
import React from "react";

const Pricing = () => {
  const benefits = [
    "Transactions e-commerce",
    "Services basés sur l'abonnement",
    "Dons en ligne pour des associations à but non lucratif",
    "Paiements de réservations et de réservations",
    "Vente de produits numériques",
  ];
  const benefits2 = [
    "Transactions Sécurisées",
    "Support Multi-Devises",
    "Protection contre la Fraude",
    "Paiement Personnalisable",
    "Interface Adaptée aux Mobiles",
    "Transactions Sécurisées",
    "Support Multi-Devises",
    "Protection contre la Fraude",
    "Paiement Personnalisable",
    "Interface Adaptée aux Mobiles",
  ];
  return (
    <div className="py-10">
      <h1 className="text-5xl font-Popins text-center font-medium text-white">
        Choisissez votre pack & Abonnez-vous
      </h1>
      <p className="font-Popins text-lg text-center text-[#e1e1e1] py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      {/* pricing box */}
      <div className="w-[95%] flex py-6 mx-auto">
        <div className="w-[55%] h-max relative z-40 bg-white/20 rounded-xl bg-clip-padding backdrop-blur-[100px] border-2 border-[#4b85FC] before:inset-0 before:rounded-xl before:bg-gradient-to-t before:from-[#4b86coe] before:to-[#75f2f631] before:-z-10">
          <div className="p-6">
            <div className="w-full text-center">
              <button className="bg-gradient-to-r h-[54px] w-[173px] rounded-[30px] from-[#4b86fc] to-[#75F2F6] text-lg text-black font-JakartaSans">
                STANDARD
              </button>
            </div>
            <div className="w-full flex justify-center my-5">
              <PaymentMethodCard />
            </div>
            <h3 className="text-center bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] font-Popins  text-5xl text-transparent bg-clip-text font-bold ">
              5% +0.25 €
            </h3>
            <div className="w-[90%] m-auto">
              <span className="font-Popins block pt-4 text-white text-lg font-bold">
                Business Acceptés :
              </span>
            </div>
            {benefits.map((i: string, index: number) => (
              <div className="py-4 flex items-center gap-2" key={index}>
                <RightMarkIcon />
                <span className="font-Popins font-medium text-[#f7f7f7] text-lg">
                  {i}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-[#07111e] w-full cursor-pointer h-[86px] flex items-center justify-center rounded-xl">
            <span className="text-white text-[28px] font-Popins font-medium">
              Démarrer
            </span>
          </div>
        </div>

        <div className="w-[45%] ml-[-2%] mt-[-1.5%] bg-hero-gradiant relative rounded-xl" >
            <div className="p-6 relative z-20">
                <div className="w-full text-center">
                    <button className="bg-gradient-to-r h-[54px] w-[173px] rounded-[30px] from-[#4B86FC] to-[#75F2F6] text-lg font-JakartaSans text-black">
                        SUR MESURE
                    </button>
                    <h3 className="py-5 bg-gradient-to-r from-[#4B86FC] to-[#75F2F6] bg-clip-text text-transparent text-lg font-Popins font-bold">Dix fonctionnalités essentielles</h3>
                </div>
                <div className="md:pl-10">
                    {
                        benefits2.map((i:string,index:number)=>(
                            <div className="w-full py-2 flex items-center gap-1" key={index}>
                                <RightMarkIcon/>
                                <span className="font-Popins font-medium text-[#f7f7f7] text-lg">
                                    {i}
                                </span>
                            </div>
                        ))

                    }
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
