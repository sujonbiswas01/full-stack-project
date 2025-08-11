"use client"
import Dashboard1 from '@/assets/svgs/dashboard1'
import Dashboard3 from '@/assets/svgs/dashboard_tree'
import Dashboard2 from '@/assets/svgs/dashboard_two'
import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const statsCards =[
  {
    title:"Transactions",
    value:"96",
    bg:"#ECF2FF",
    textColor:"#5D87FF",
    img:<Dashboard1/>
  },
  {
    title:"Chiffre du mois",
    value:"3,65096",
    bg:"#FEF5E5",
    textColor:"#FFAE1F",
    img:<Dashboard2/>
  },
  {
    title:"Paiements refusés",
    value:"696",
    bg:"#FBF2EF",
    textColor:"#FA896B",
    img:<Dashboard3/>
  }
]

const data=[
  {name:"Jan",value:400},
  {name:"Feb",value:300},
  {name:"Mar",value:600},
  {name:"Apr",value:800},
  {name:"May",value:500},
  {name:"Jun",value:900},
  {name:"Jul",value:700},
]
const Page = () => {
  return (
    <div className='space-y-6 px-5'>
      <div>
        <h1 className='text-2xl font-semibold text-black pt-4'>
          Dashboard
        </h1>
        <p className='text-gray-500'>welcome back to your Dahboard</p>
      </div>

      {/* stats cards */}
      <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-5 gap-4 space-y-4'>
        {statsCards?.map((card,index)=>(
          <div className='p-4 h-[150px] w-[200px] rounded-md'  style={{backgroundColor:card.bg}} key={index}>
            <div className=' w-full justify-center items-center flex'>
              {card.img}
            </div>
            <h3 className={`text-center font-medium font-JakartaSans mt-2`} style={{color:card.textColor}}>{card.title}</h3>
            <h3 className='text-center font-semibold mt-2 text-2xl' style={{color:card.textColor}}>{card.value}</h3>
          </div>
        ))}
      </div>

      {/* charts */}
      <div className='w-full p-4 bg-white '>
        <h3 className='text-lg font-medium text-gray-800 mb-4'>Revenue Overview </h3>
        <div className='h-80'>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <AreaChart data={data} margin={{top:10,right:30,left:0,bottom:0}}>
            <CartesianGrid strokeDasharray={"3.3"}/>
            <XAxis dataKey={"name"}/>
            <YAxis dataKey={"name"}/>
            <Tooltip />
            <Area type="monotone" dataKey={"value"} stroke='#3b82f6'  fillOpacity={'0.3'}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Page