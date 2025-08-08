import LinkIconButton from '@/assets/icon/link-icon-button'
import APISupported from '@/assets/svgs/api-supported'
import Link from 'next/link'
import React from 'react'

const API = () => {
  return (
    <div className='w-[90%] md:py-10 m-auto flex md:flex-row flex-col'>
        <div className='md:w-[50%]'>
            <h3 className='font-Popins w-[95%] md:leading-[50px] text-4xl font-medium text-[#e1e1e1]'>Nous disposons d’une api solide fait pour s’intégrer au mieux à votre environnement.</h3>

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
        <div className='md:w-[50%] flex justify-center'>
        <APISupported/>
        </div>

    </div>
  )
}

export default API