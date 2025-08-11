"use client";
import LogoDark from "@/assets/svgs/logo-dark";
import { Logo } from "@/config/constants";
import Link from "next/link";
import React, { useState } from "react";
import CompanyDropDown from "./company.dropdown";
import { Bell, ChevronDown, ChevronUp, LogOut } from "lucide-react";
import Navitem from "./navitem";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const {data}=useSession();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isApiOpen, setisApiOpen] = useState(false);
  const history = useRouter();

  const tooglesidebar=()=>{
    setSidebarCollapsed(!isSidebarCollapsed)
  }
  const toggleApi=()=>{
    setisApiOpen(!isApiOpen)
  }
  return (
    <div
      className={` bg-white flex flex-col ${
        isSidebarCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      {/* logo */}
      <div className="p-4">
        <Link href={"/"} className="flex items-center mb-4 gap-5">
          <LogoDark />
          {!isSidebarCollapsed && (
            <span className="text-2xl w-full  font-semibold text-black font-Popins ">
              MyPay
            </span>
          )}
        </Link>

        {!isSidebarCollapsed && <CompanyDropDown />}
        <button
          className={`w-full bg-blue-500 font-JakartaSans text-white py-2 px-4 rounded-md text-sm font-medium mt-3 mb-4 ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          Ajouter une entreprise
        </button>
        <button onClick={tooglesidebar} className="md:hidden absolute top-4 right-4 bg-gray-100 p-2 rounded-lg">
            {!isSidebarCollapsed ? <ChevronDown size={18}/>:<ChevronUp/>}
        </button>
      </div>
      {/* user profile */}
      <div className={`border-t border-b border-gray-300 py-1 pb-2 px-4 flex ${isSidebarCollapsed?"justify-center":"items-center justify-between"}`}>
        {isSidebarCollapsed?(<div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600">


        </div>):(<>
        <div className=" flex gap-3 items-center">
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600">
              {data?.user?.name?.charAt(0)} s

           </div>
             <span className="text-gray-700 mr-3 font-jakartaSans">Nom du compte</span>
            </div>
            <button className="text-blue-500 relative "><Bell size={18}/> <span className="absolute -top-1 right-1 w-2 h-2 bg-blue-500  rounded-full"></span></button></>)}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4">
        {/* pages section */}
        {!isSidebarCollapsed && (
          <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-widest">
            pages
          </div>
        )}
        <Navitem icon="default" label="Default" isActive={true} isCollapse={isSidebarCollapsed}/>
        <div className="relative">
          <Navitem icon="api" label="API" hasDropDown={true} isOpen={isApiOpen} onClick={toggleApi} isCollapse={isSidebarCollapsed}/>

          {isApiOpen && !isSidebarCollapsed && (
            <div className="bg-gray-300 pl-10 py-1">
              <Navitem icon="log" isNested={true} isCollapse={isSidebarCollapsed} label="log"/>
            </div>
          )}
        </div>
        <Navitem icon="application" isNested={true} isCollapse={isSidebarCollapsed} label="application"/>
        <Navitem icon="transaction" isNested={true} isCollapse={isSidebarCollapsed} label="transaction"/>
        <Navitem icon="support" isNested={true} isCollapse={isSidebarCollapsed} label="support"/>
        <Navitem icon="create-ticket" isNested={true} isCollapse={isSidebarCollapsed} label="create ticket"/>
        <Navitem icon="packs" isNested={true} isCollapse={isSidebarCollapsed} label="Package"/>
        <Navitem icon="mon-entreprise" isNested={true} isCollapse={isSidebarCollapsed} label="mon entreprise"/>

<div className="w-full h-[1px] bg-slate-200 mt-4">

</div>
        {/* other section */}
        {!isSidebarCollapsed && (
          <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-widest mt-4">
            OTHERS
          </div>
        )}

         <Navitem icon="avatar" badge="coded" badgeColor="blue" isCollapse={isSidebarCollapsed} label="avatar"/>
         <Navitem icon="outline" badge="outline" badgeColor="gray" isCollapse={isSidebarCollapsed} label="outline" />
         <Navitem icon="basic" badge="9" isRound={true} badgeColor="blue" isCollapse={isSidebarCollapsed} label="basic" subtext="8+ Basic Components" />

      </div>
      {/* logout button */}
      <div className="p-4 border-t border-gray-200 ">
        <button onClick={()=>{
          signOut();
          history.push('/login')
        }} className={`flex items-center text-gray-600 hover:text-gray-800 ${isSidebarCollapsed?"justify-center":""}`}>
          <LogOut size={18}/>
          {!isSidebarCollapsed && <span className="ml-2">Se déconnecter</span>}
        </button>

      </div>
    </div>
  );
};

export default Sidebar;
