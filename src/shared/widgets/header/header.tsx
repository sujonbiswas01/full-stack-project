import LinkIcon from '@/assets/icon/link-icon'
import { Logo } from '@/config/constants'
import Link from 'next/link'
import React from 'react'

const Header  = () => {
  return (
    <div className='w-full flex p-6 absolute z-10 top-0 items-center justify-between'>
      <Logo/>
      <div className='flex gap-6 items-center justify-between'>
        <Link href={'/login'} className='text-[22px]'> login</Link>
        <Link href={'/signup'} className='text-[22px]'> signup</Link>
        <Link href={'/dashboard'} className='text-[22px]'> dashboard</Link>
        <Link href={'/'} className='flex items-center gap-[6px]'> <div><LinkIcon/></div> <span className='text-[#FFFFFF] text-[22px] font-medium font-inter '> Espace client</span></Link>
        
      </div>
    </div>
  )
}

export default Header