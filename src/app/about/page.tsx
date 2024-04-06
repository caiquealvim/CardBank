'use client'
import { useEffect } from "react";
import React from 'react'
import Image from 'next/image'
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/16/solid'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const About = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      easing: 'ease', 
      once: true, 
      anchorPlacement: 'top-bottom',
    })
    },[])



  return (
    <div className='bg-white w-[100%] h-screen flex flex-row'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
      <main>
      <div className='flex flex-col gap-6 mt-[2rem] mx-auto  w-[60%]'>
        <button className='border w-[5rem] bg-slate-800 rounded-full p-4 text-white font-semibold 
        hover:p-5 transition-all duration-150 '><a href="/"><ArrowLeftIcon/></a></button>
      <div className='flex'>
       <p  data-aos="fade-right" className='pr-2  mb-[1.3rem]'>WHY US</p>
       <div className='bg-yellow-200 rounded-full w-5 h-5' data-aos="fade-up"></div>
      <div className='bg-indigo-300 rounded-full w-5 h-5 'data-aos="fade-left"></div>
       </div>
       <div className=''>
       <h1 data-aos="flip-down" className='text-6xl'>The loantema Difference</h1>
       <p data-aos="flip-down" className='text-zinc-400 mt-5'>
        if you need contact us only call to our support Team
        and what you need we will provide for you as soon as possible.
       </p>
       </div>
       <div>
        <Image data-aos="flip-down" src="/images/Logo2.png" width={400} height={400} alt='logo2' className='object-cover lg:mx-auto md:ml-[7rem] '/>
       </div>
       <div className='mt-[5rem]'>
        <Image data-aos="zoom-in" src="/images/Card3.png" width={600} height={600} alt='logo2' className='object-cover lg:mx-auto md:ml-[7rem]'/>
       </div>
        </div>
      </main>

      <div className='mt-[5rem]'>
        <Image data-aos="zoom-in-down" data-aos-delay="400" src="/images/cardblack.jpg" width={600} height={600} alt='logo2'
         className='object-cover mx-auto'/>
          <div className='col-span-2 ' data-aos="flip-down">
          <div className='w-[60%] flex flex-col gap-5 ml-[7rem]'>
          <h1 className='font-bold'>Online Employers to make your Black Card</h1>
          <div className='flex gap-2'>
          <p>Accessibility</p>
          <CheckCircleIcon className='w-6'/>
          <p>Team Time</p>
          <CheckCircleIcon className='w-6'/>
          </div>
          <p className='text-zinc-500'>
            With you will beggin your Black Card with your team members and members
            of your team. You will be able to be sure.
          </p>
          <button className='border bg-slate-800 rounded-full p-4 text-white font-semibold 
           hover:p-5 transition-all duration-150 '>GET YOUR CARD</button>
         </div>
         </div>
         </div>

      </div>

   


    </div>
  )
}

export default About