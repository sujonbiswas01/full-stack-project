import LinkIcon from '@/assets/icon/link-icon'
import { Logo } from '@/config/constants'
import Link from 'next/link'
import React from 'react'

const Header  = () => {
  return (
    <div className='w-full flex p-6 absolute z-10 top-0 items-center justify-between'>
      <Logo/>
      <div>
        <Link href={'/'} className='flex items-center gap-[6px]'> <div><LinkIcon/></div> <span className='text-[#FFFFFF] text-[22px] font-medium font-inter '> Espace client</span></Link>
      </div>
    </div>
  )
}

export default Header