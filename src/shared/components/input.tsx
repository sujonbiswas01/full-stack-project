import React from 'react'
type inputProps={
    label:string,
    placeholder:string,
    type?:string
}
const Input = ({label,placeholder,type="text"}:inputProps) => {
  return (
    <div className='flex flex-col bg-[#11101D]'>
        <label htmlFor="" className='text-white text-lg font-DmSans font-bold mb-2'>
            {label}
        </label>
        <input type={type} placeholder={placeholder} className='w-full h-[55px] font-DmSans text-lg gradient-input text-white px-4 py-3 rounded-md' />
    </div>
  )
}

export default Input