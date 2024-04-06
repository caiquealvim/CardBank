import { PlayCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'



const Hero = () => {
  return (
 <div className='bg-blue-800 w-[100%] h-[40rem] pt-6 md:pt-[12vh] md:h-[100vh] '>
    <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
    <div className='flex flex-col gap-3 text-white'>
       <div className='flex   '>
       <p data-aos="fade-right" className='pr-2  mb-[1.3rem]'>WELCOME TO LOANTEAM</p>
       <div className='bg-yellow-200 rounded-full w-5 h-5' data-aos="fade-up"></div>
        <div className='bg-indigo-300 rounded-full w-5 h-5 ' data-aos="fade-left"></div>
       </div>
       <div >
        <h1 data-aos="fade-right" className='text-6xl font-semibold  text-white xl:text-[60px] md:text-[35px] sm:text-[25px] '>Seamless Loans, Brighter Futures</h1>
       </div>
    <div className='flex ' data-aos="fade-right" data-aos-delay="400">
    <button className='border bg-black rounded-full p-4 text-white font-semibold 
    hover:p-5 transition-all duration-150 opacity-70'>GET STARTED</button>
    <PlayCircleIcon className='w-[5rem] cursor-pointer opacity-75'/>
    </div>
    </div>
    
    <div className='hidden md:block' data-aos="fade-right" data-aos-delay="400">
        <Image src='/images/card1.png' width={400} height={400} alt='card1' data-aos="fade-right" data-aos-delay="400"
        className=''
        />
        <Image src='/images/card2.png' width={400} height={400} alt='card1' data-aos="fade-up" data-aos-delay="600"
        className='mt-[-13rem] opacity-35'
        />
    </div>

    </div>
    </div>
 </div>
 
  )
}

export default Hero