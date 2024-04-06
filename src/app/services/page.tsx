'use client'
import { useEffect } from "react";
import { AdjustmentsHorizontalIcon, ArchiveBoxArrowDownIcon, CalendarDaysIcon, GlobeAltIcon, ArrowLeftIcon } from '@heroicons/react/16/solid'
import { CreditCardIcon } from '@heroicons/react/16/solid'
import { WalletIcon } from '@heroicons/react/16/solid'
import React from 'react'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const Services = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      easing: 'ease', 
      once: true, 
      anchorPlacement: 'top-bottom',
    })
    },[])


  return (
    <div className='w-[100%] h-full bg-purple-200'>

    <div className='col-span-2'>
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-7 lg:ml-[10rem] '>
        <div className='w-[80%] mx-auto'>
        <button className='border w-[5rem] bg-slate-800 rounded-full p-4 mb-6 text-white font-semibold 
        hover:p-5 transition-all duration-150 '><a href="/"><ArrowLeftIcon/></a></button>
        <div className='flex mx-auto'>
         <p data-aos="fade-right" className='pr-2  mb-[1.3rem]'>OUR SERVICES</p>
       <div className='bg-yellow-200 rounded-full w-5 h-5' data-aos="fade-up"></div>
       <div className='bg-indigo-300 rounded-full w-5 h-5 'data-aos="fade-left"></div>
       </div>
        <h1 data-aos="flip-down" className='text-5xl text-black font-semibold mt-5'>EXPLORE THE RANG OF LOANTEMAS FINANCIAL SERVICES</h1>
        </div>
        <div data-aos="flip-left" data-aos-delay= "500"  className='w-[50%] lg:mt-[20rem] mt-[5rem] mx-auto'>
        <p  className='text-zinc-500 mb-8'>with our finacial team you will have te best
        investiments when you buy your shoops and after all
        you will so happy.</p>
        <button className='border bg-slate-800 rounded-full p-4 text-white font-semibold 
        hover:p-5 transition-all duration-150 '>SEE ALL SERVICES</button>
        </div>
      </div>

    </div>
     

       <div className='col-span-3'  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        
          <div className='grid grid-cols-1 sm:grid-cols-2 
          md:grid-cols-3 gap-[1rem] items-center mt-9 lg:ml-[10rem] sm:ml-[7rem] md:mr-[5rem] mx-auto '>
          <div className='bg-white w-[80%] md:w-[100%] h-[20rem]  rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer mx-auto'>
            <div>
            <WalletIcon width={40} className='text-purple'/>
            <h1 className='text-2xl font-semibold mt-5'>Business Loan</h1>
            <p className='mt-[8rem] text-zinc-400 text-center   mx-auto'>Enim augue facilist et urna
            diam pelequesque lextus. Odio at nunc enm facilist.
            </p>
            </div>
          </div>

          <div className='bg-white  w-[80%] md:w-[100%] h-[20rem] rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer mx-auto'>
            <div>
            <ArchiveBoxArrowDownIcon width={40} className='text-purple'/>
            <h1 className='text-2xl font-semibold mt-5'>Business Loan</h1>
            <p className='mt-[8rem] text-zinc-400 text-center   mx-auto'>Enim augue facilist et urna
            diam pelequesque lextus. Odio at nunc enm facilist.
            </p>
            </div>
          </div>
          <div className='bg-white w-[80%] md:w-[100%] h-[20rem]  rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer mx-auto'>
            <div>
            <AdjustmentsHorizontalIcon width={40} className='text-purple'/>
            <h1 className='text-2xl font-semibold mt-5'>Customized Loan</h1>
            <p className='mt-[8rem] text-zinc-400 text-center   mx-auto'>Enim augue facilist et urna
            diam pelequesque lextus. Odio at nunc enm facilist.
            </p>
            </div>
          </div>
          <div className='bg-white  w-[80%] md:w-[100%] h-[20rem]  rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer mx-auto'>
            <div>
            <GlobeAltIcon width={40} className='text-purple'/>
            <h1 className='text-2xl font-semibold mt-5'>Online Loans</h1>
            <p className='mt-[8rem] text-zinc-400 text-center   mx-auto'>Enim augue facilist et urna
            diam pelequesque lextus. Odio at nunc enm facilist.
            </p>
            </div>
          </div>
          <div className='bg-white  w-[80%] md:w-[100%] h-[20rem]  rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer mx-auto'>
            <div>
            <CreditCardIcon width={40} className='text-purple'/>
            <h1 className='text-2xl font-semibold mt-5'>Financial Loan</h1>
            <p className='mt-[8rem] text-zinc-400 text-center   mx-auto'>Enim augue facilist et urna
            diam pelequesque lextus. Odio at nunc enm facilist.
            </p>
            </div>
          </div>
          <div className='bg-white  w-[80%] md:w-[100%] h-[20rem]  rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer mx-auto'>
            <div>
            <CalendarDaysIcon width={40} className='text-purple'/>
            <h1 className='text-2xl font-semibold mt-5'>Consultation Loan</h1>
            <p className='mt-[8rem] text-zinc-400 text-center   mx-auto'>Enim augue facilist et urna
            diam pelequesque lextus. Odio at nunc enm facilist.
            </p>
            </div>
          </div>
          

          
      </div>
    </div>
     
</div>
  )
}

export default Services    






