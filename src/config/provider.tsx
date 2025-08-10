'use client'
import Footer from '@/shared/modules/footer'
import Header from '@/shared/widgets/header'
import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const Provider = ({children}:{children:React.ReactNode}) => {
    const pathName = usePathname();
    console.log(pathName)
  return (
   <SessionProvider>
    {pathName ==="/dashboard"?(<>{children}</>):(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
        )}
   </SessionProvider>
  )
}

export default Provider