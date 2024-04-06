'use client'
import { useEffect } from "react";
import { ArrowLeftIcon, StarIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'
import { BsEmojiAngryFill, BsFacebook, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import { FcCellPhone } from 'react-icons/fc'
import { BiLocationPlus } from 'react-icons/bi'
import 'aos/dist/aos.css'; 
import AOS from 'aos';


const Blog = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000, 
      easing: 'ease', 
      once: true, 
      anchorPlacement: 'top-bottom',
    })
    },[])


  return (
    <div className='bg-white w-auto h-full text-white'>

      <main>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-7 w-[80%] lg:ml-[7rem] mx-auto'>
          <div>
          <button className='border w-[5rem] bg-slate-800 rounded-full p-4 text-white font-semibold 
          hover:p-5 transition-all duration-150 mb-8 '><a href="/"><ArrowLeftIcon/></a></button>
          <div className='flex w-[50%]'>
           <p  data-aos="fade-right" className='pr-2  mb-[1.3rem] text-black'>About Us</p>
              <div className='bg-yellow-200 rounded-full w-5 h-5' data-aos="fade-up"></div>
              <div className='bg-indigo-300 rounded-full w-5 h-5 ' data-aos="fade-left"></div>
          </div>
          <h1 data-aos="zoom-in-left" className='text-6xl text-black'>What our clients say</h1>
           <p  data-aos="zoom-in-left"className='text-zinc-600 mt-5'>
         if you have a dream you can be part of our team
         and what you need we will provide for you as soon as possible.
         </p>
          </div>

          <div data-aos="zoom-out" className='grid grid-cols-1 md:grid-cols-2 gap-7 md:mt-[10rem] mx-auto '>

            <div className='bg-blue-500 w-[15rem] h-[10rem] rounded-xl'>
              <div className='flex flex-row justify-around md:mt-3'>
              <span>4.5</span>
              <StarIcon width={20}/>
              </div>
              <div className='flex flex-col gap-2'>
              <p className='text-zinc-200 text-[13px] text-center'>
                For me its the best thing what i made because
                i am looking for something better than just looking
              </p>
              <div className='flex flex-col gap-[0.2rem] ml-[80px]'>
              <p className='text-black font-semibold  '><i>Caique Alvim</i></p>
              <span className='text-zinc-200 text-[15px]  opacity-45'>Front-End Developer</span>
              </div>
            </div>
              
          </div>

          <div className='bg-blue-500 w-[15rem] h-[20rem]  rounded-xl '>
              <div className='flex flex-row justify-around md:mt-3'>
              <span>4.5</span>
              <StarIcon width={20}/>
              </div>
              <div className='flex flex-col gap-2 mt-5'>
              <p className='text-zinc-200 text-[13px] text-center'>
                For me its the best thing what i made because
                im looking for something better than just looking.
              </p>
              <div className='flex flex-col gap-[1rem] ml-[80px]'>
              <p className='text-black font-semibold  mt-8'><i>Caique Alvim</i></p>
              <span className='text-zinc-200 text-[15px]  opacity-45'>Front-End Developer</span>
              </div>
            </div>
              
          </div>

          <div className='bg-blue-500 w-[15rem] h-[20rem] rounded-xl md:-mt-[10rem]'>
              <div className='flex flex-row justify-around mt-3'>
              <span>4.5</span>
              <StarIcon width={20}/>
              </div>
              <div className='flex flex-col gap-2 mt-5'>
              <p className='text-zinc-200 text-[13px] text-center'>
                For me its the best thing what i made because
                im looking for something better than just looking.
              </p>
              <div className='flex flex-col gap-[1rem] ml-[80px]'>
              <p className='text-black font-semibold  mt-8'><i>Caique Alvim</i></p>
              <span className='text-zinc-200 text-[15px]  opacity-45'>Front-End Developer</span>
              </div>
            </div>
              
          </div>

          <div className='bg-blue-500 w-[15rem] h-[10rem] rounded-xl'>
              <div className='flex flex-row justify-around mt-3'>
              <span>4.5</span>
              <StarIcon width={20}/>
              </div>
              <div className='flex flex-col gap-2 '>
              <p className='text-zinc-200 text-[13px] text-center'>
                For me its the best thing what i made because
                im looking for something better than just looking.
              </p>
              <div className='flex flex-col ml-[80px]'>
              <p className='text-black font-semibold '><i>Caique Alvim</i></p>
              <span className='text-zinc-200 text-[15px]  opacity-45'>Front-End Developer</span>
              </div>
            </div>
              
          </div>
          </div>

     </div>
      </main>



    <footer className='bg-zinc-300 opacity-75 w-[100%] h-full  text-black pt-10 mt-10' data-aos="fade-up">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:ml-[10rem] md:mx-auto'>


        <div className='flex flex-col gap-6'>
        <Image width={200} height={200} className='rounded-full' src="/images/Logo.png" alt='foto do perfil-caique'/>
        <p className='lg:text-[15px] md:text-[25px] sm:text-[35px]'>
          if you trust in our team you can create your own
          website with us. After all, you can create your own website
          for everyone and everywhere.
        </p>
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='font-semibold'>Company</h1>
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Courses</a>
          <a href="">Programs</a>
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='font-semibold'>Services</h1>
          <a href="">Personal Loan</a>
          <a href="">Business Loan</a>
          <a href="">Financial Loan</a>
          <a href="">Consultation</a>
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='font-semibold'>Company</h1> 
          <div className='flex '>
          <FcCellPhone/>
          <a href="">8398854478</a>
          </div>
         <div className='flex '>
         <BiLocationPlus/>
          <a href="">Paraiba-JP</a>
         </div>
          <a href="">Courses</a>
          <a href="">Programs</a>
        </div>
 
      </div>

      <div  className='w-[80%] border border-zinc-400 border-solid mt-5 mx-auto'>
      </div>

      <div className='flex flex-row justify-between mt-3 w-[80%] mx-auto'>
        <div className='flex flex-row'>
          <p>Copyrigt@ 2024 Caique Alvim </p>
          <span>|</span>
          <p>Front End Developer</p>
        </div>

        <div className='flex flex-row gap-4' >
        <a href=""><BsFacebook/></a>
        <a href=""><BsLinkedin/></a>
        <a href=""><BsTwitterX/></a>
        <a href=""><BsEmojiAngryFill/></a>
        </div>
    
        </div>

    </footer>

    </div>
  )
}

export default Blog