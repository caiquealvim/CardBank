'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

  const [nave,setNave] = useState(false)  
  return (
    <div className='w-[100%] z-[100] bg-white p-[2rem]'>
        <div className='flex flex-row items-center justify-around text-zinc-400 mx-auto'>
        <Image width={200} height={200} className='rounded-full' src="/images/Logo.png" alt='foto do perfil-caique'/>
        <div className='flex items-center gap-4 '>
            <ul className='md:flex hidden items-center space-x-10'>
                <li><a href="#" className=' hover:text-black'>Home</a></li>
                <Link href='/about'><li className=' hover:text-black'>About Us</li></Link>
                <li> <a href="/services"  className=' hover:text-black'>Services</a></li>
                <li><a href="/contact"  className=' hover:text-black'>Contact Us </a></li>
                <li><a href="/blog"  className=' hover:text-black'>Blog</a></li>
            </ul>   
        </div>
        <div>
        <button className='hidden md:flex border bg-black rounded-full p-4 text-white font-semibold hover:p-5 transition-all duration-150'>GET STARTED</button>
        </div>

        <div onClick={()=>setNave(!nave)} className='cursor-pointer pr-4 z-10 text-blue-300 md:hidden'>
          {nave ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
      {nave && (
          <ul data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="800" className='flex flex-col justify-center gap-4 text-[15px] font-semibold cursor-pointer items-center 
          text-center absolute bg-gray-800 top-0 left-0 h-auto w-[100%]  text-white'>
                <li className=' hover:text-white  border-b-2 border-blue-200 w-[30%]'><Link href='#'>Home</Link></li>
                <li className=' hover:text-white  border-b-2 border-blue-200 w-[30%]'><Link href='/services'>About Us</Link></li>
                <li className=' hover:text-white  border-b-2 border-blue-200 w-[30%]'><Link href='/contact'>Contact Us</Link></li>
                <li className=' hover:text-white  border-b-2 border-blue-200 w-[30%]'><Link href='/blog'>Blog</Link></li>
          </ul>)}

        </div>




      


    </div>
  )
}

export default NavBar