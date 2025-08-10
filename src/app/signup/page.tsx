"use client"
import AuthCharacter from '@/assets/svgs/auth-character'
import BackArrow from '@/assets/svgs/backarrow'
import FaceBookIcon from '@/assets/svgs/faceBookIcon'
import GoogleIcon from '@/assets/svgs/google-icon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
type inputs = {
  username:string,
  email:string,
  password:string
}
const Page = () => {
  const {register,handleSubmit,formState:{errors}}=useForm<inputs>()
  const [loading,setloading] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const router = useRouter()
  
  const onSubmit:SubmitHandler<inputs>=async(data)=>{
    setloading(true);
    setErrorMessage("")
    try{
      const response = await fetch("/api/auth/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      });
      const result = await response.json();
      if(!response.ok){
        throw new Error(result.message || "Something");
      } 
      router.push("/login")

    }
    catch(error:any){
      setErrorMessage(error.message)
    } finally{
      setloading(false)
    }
  }
  return (
    <div className='w-full mb-10 md:px-10 pt-6 md:flex bg-hero-gradiant relative h-screen'>
        <div className='relative z-10 w-[90%] md:w-[80%] mx-auto'>
          <div className='flex justify-between items-center'>
            <Link href={'/login'}>
            <BackArrow/>
            </Link>
          </div>
          {/* sign up */}
          <div className='w-full md:flex gap-4 min-h-[60vh] p-3 shadow mt-10 bg-[#f3f3f3] rounded-2xl'>
            <div className='md:w-[36%] bg-form-gradiant relative rounded-2xl'>
              <div className='relative h-full flex items-center justify-center z-10'>
              <AuthCharacter/>
              </div>

            </div>
            <div className='md:w-[64%] z-10 pt-[4%]'>
              <form className='md:w-[80%] lg:w-[70%] m-auto w-[90%]' onSubmit={handleSubmit(onSubmit)} action="">
                <div>
                  <h1 className='text-[#2A3547] font-JakartaSans text-3xl font-semibold' >Bienvenue sur MyPay</h1>
                  <p className='text-[#2A3547] font-JakartaSans text-lg'>
                    Votre admin panel
                  </p>
                  <div className='my-8 flex gap-4 items-center'>
                    <div className='bg-white shadow-sm flex gap-3 px-2 py-1 rounded-xl text-black cursor-pointer'>
                      <GoogleIcon/>
                      <h2>Connection Google</h2>
                    </div>

                    <div className='bg-white shadow-sm flex gap-3 px-2 py-1 rounded-xl text-black cursor-pointer'>
                       <FaceBookIcon/>
                      <h2>Connection Google</h2>
                    </div>
                   
                  </div>
                  <div className='flex items-center my-5 font-JakartaSans text-sm text-[#5A6A85]'>
                    <div className='flex-1 border-t border-[#EAEFF4]'></div>
                      <span className='px-3 text-center'>
                        ou
                      </span>
                     <div className='flex-1 border-t border-[#EAEFF4]'></div>
                  </div>
                  <div className='my-4'>
                    <label htmlFor="" className='text-black'>Nom d’utilisateur</label>
                    <input type="text" {...register("username",{required:"Le nom d'utilisateur est requis"})} className='w-full shadow-sm px-2 text-lg rounded-lg font-Popins font-medium text-[#333333] outline-none placeholder:text-black  border border-[#EAEFF4]'/>
                    {errors.username && (<p className='text-red-500 text-sm'>{errors.username.message}</p>)}
                  </div>
                  <div className='my-4'>
                    <label htmlFor="" className='text-black'>Email</label>
                    <input type="text" {...register("email",{required:"Le nom d'utilisateur est requis"})} className='w-full shadow-sm px-2 text-lg rounded-lg font-Popins font-medium text-[#333333] outline-none placeholder:text-black  border border-[#EAEFF4]'/>
                    {errors.email && (<p className='text-red-500 text-sm'>{errors.email.message}</p>)}
                  </div>
                  <div className='my-4 '>
                    <label htmlFor="" className='text-black'>password</label>
                    <input type="text" {...register("password",{required:"Le nom d'utilisateur est requis",minLength:{
                      value:6,
                      message:"le mot de passe doit comporter au moins 6 caracteres"
                    }})} className='w-full shadow-sm px-2 text-lg rounded-lg font-Popins font-medium text-[#333333] outline-none placeholder:text-black  border border-[#EAEFF4]'/>
                    {errors.password && (<p className='text-red-500 text-sm'>{errors.password.message}</p>)}
                  </div>
                  <div>
                    <button disabled={loading} type='submit' className='w-full bg-[#5D87FF] h-[48px] my-10 rounded-lg'>
                      <span className="text-xl text-white font-Popins font-medium ">{loading?"...":"creer un compte"}</span>
                    </button>
                    {errorMessage && <p className='text-red-500 pt-1'>{errorMessage}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page