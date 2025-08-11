import Sidebar from '@/shared/components/sidebar';
import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full flex bg-white'>
      <div className='md:w-[250px] 2xl:w-[270px] h-screen border-r border-r-gray-200 sticky top-0 overflow-y-scroll' style={{scrollbarWidth:"none"}}>
      <Sidebar/>
      </div>
      {children}
    </div>
  )
}
