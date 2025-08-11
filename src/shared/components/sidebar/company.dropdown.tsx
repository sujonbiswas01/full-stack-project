import React, { useState } from 'react'
import { CgChevronDoubleDown } from 'react-icons/cg'

const CompanyDropDown = () => {
    const [isOpen,setIsOpen] =useState(false)
  return (
    <div className='relative'>
        <button onClick={()=>setIsOpen(!isOpen)} className='w-full flex items-center justify-between'>
            <div className='flex items-center'>
                <span className='text-gray-800 font-semibold font-jakartaSans '>Nom EntrePrise</span>

            </div>
            <div className='flex items-center '>
                <span className='text-xs bg-green-100 text-green-800 py-0.5 px-2 rounded-full'>
                    ACTif
                </span>
               <div>
                 <CgChevronDoubleDown size={16} className='text-gray-500'/>
               </div>

            </div>
        </button>
        {isOpen && (
            <div className='absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg '>
                <button className='w-full text-left px-4 py-2 text-black hover:bg-gray-100 text-sm'>
                    Nom Entreprise
                </button>
                <button className='w-full text-left px-4 py-2 text-black hover:bg-gray-100 text-sm'>
                   Ajouter une entreprise
                </button>
            </div>
        )}
    </div>
  )
}

export default CompanyDropDown