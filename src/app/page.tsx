'use client'
import { useEffect } from "react";
import Hero from "@/app/Hero";
import NavBar from "./navbar/NavBar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



export default function Home() {

useEffect(()=>{
AOS.init({
  duration: 1000, 
  easing: 'ease', 
  once: true, 
  anchorPlacement: 'top-bottom',
})
},[])


  return (
    <div >
      <NavBar/>
      <Hero/>
    </div>
  );
}
