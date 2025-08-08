import { Logo } from '@/config/constants'
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  const links =[
    {
      title:"Usefull Links",
      items:['Content','How it Works','Create','Explore','Terms & Services']
    },
    {
      title:"Community",
      items:['Help Center','Partners','Suggestions','Blog','Newsletters']
    },
    {
      title:"Partner",
      items:['Our Partner','Become a Partner']
    }
  ]
 
  return (
    <footer className='bg-black text-white py-10'>
      <div className='container mx-auto px-6 md:px-12 lg:px-16'>
        <div className='flex flex-col md:flex-row justify-between items-start'>
          <div className='w-full flex flex-col items-center md:block md:w-1/3 mb-6 md:mb-0'>
          <Logo/>
          <p className='text-gray-400 pt-8 text-lg'>
            A new way to make the payments easy, reliable and secure.
          </p>
          </div>
          <div className='md:flex m-auto md:m-0 flex-wrap md:space-x-16 space-y-6 md:space-y-0'>
            {
              links.map(({title,items})=>(
                <div key={title}>
                  <h3 className='text-gray-300 font-semibold mb-3'>{title}</h3>
                  <ul className='text-gray-400 text-lg space-y-2'>
                    {items.map((item)=>(
                      <li key={item}>
                        <Link href="#" className='hover:text-white'>{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }

          </div>

        </div>
        <div className='flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-10 pt-6'>
          <p className='text-gray-500'>
           Copyright &copy; 202X EvoFin. All Rights Reserved.
          </p>
          <div className='flex space-x-5 mt-4 md:mt-0'>
          {[FaFacebook,FaTwitter,FaLinkedin].map((Icon:any, i: number)=>(
            <Link href={'#'} key={i} className='text-gray-600 hover:text-white text-xl'><Icon/></Link>
          ))}
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer