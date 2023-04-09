'use client'
import Image from "next/image";
import React,{useState, useEffect, use}  from "react";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import habiblogo from "../../public/assets/hblogo.webp";
import Link from "next/link";
import {usePathname} from 'next/navigation'

export default function Navbar() { 
      const [nav, setNav] = useState(false)
      const[shadow, setShadow]= useState(false)
      const[navBg, setNavBg] = useState('#ecf0f3')
      const[linkColor, setLinkColor] = useState('#1f2937')
      
      const pathname = usePathname()
      
      useEffect(()=>{
        if(
            pathname === '/property'||
            pathname === '/crypto'||
            pathname === '/netflix'||
            pathname === '/twitch') {
                setNavBg('transparent')
                setLinkColor('#ecf0f3')
            }else{
                setNavBg('#ecf0f3')
                setLinkColor('#1f2937')
            }
        },[pathname])

      const handleNav=()=>{ 
        setNav(!nav) 
      }
      useEffect(()=>{
        const handleShadow =()=>{
            if(window.scrollY >= 90){
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
      },[])
  return (
    <div 
    style={{backgroundColor:`${navBg}`}}
    className={shadow ? "fixed w-full h-20 shadow-xl z-[100]":"fixed w-full h-20 z-[100]"}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='/'>
        <Image src={habiblogo} alt="" width="125" height="50" />
        </Link>
      <div>
        <ul style={{color:`${linkColor}`}} className="hidden md:flex ">
            <a href='/'>
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </a>
           
            <a href='/#about'>
                
                <li className="ml-10 text-sm uppercase hover:border-b">About</li>
               
            </a>
            
            <a href='/#skills'>
               
                <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                
            </a>
           
            <a href='/#projects'>
                <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
            </a>
            <a href='/#contacts'>
                <li className="ml-10 text-sm uppercase hover:border-b">Contacts</li>
            </a>
        </ul>
        <div onClick={handleNav} className="md:hidden ">
            <AiOutlineMenu size={25}/>
        </div>
      </div>
      </div>
      <div className={nav?" md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":''}>
        <div className={nav?"fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        :"fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
        <div>
            <div className="flex w-full items-center justify-between">
                <Link href='/'>
                <Image src={habiblogo} alt='/' width='87' height='35'/>
            </Link>
                <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose/>
            </div>
            </div>
            <div className="border-b border-gray-300 my-4">
                <p className="width-[85%] md:w-[90%] py-4">Let's build something legendary together</p>
            </div>
        </div>
        <div className="flex flex-col py-4">
            <ul className="uppercase">
                <a href='/'>
                <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
                </a>
                <a href='/#about'>
                <li onClick={() => setNav(false)} className="py-4 text-sm">About</li>
                </a>
                <a href='/#skills'>
                <li onClick={() => setNav(false)} className="py-4 text-sm">Skills</li>
                </a>
                <a href='/#projects'>
                <li onClick={() => setNav(false)} className="py-4 text-sm">Projects</li>
                </a>
                <a href='/#contacts'>
                <li onClick={() => setNav(false)} className="py-4 text-sm">Contacts</li>
                </a>
            </ul>
            <div className="pt-10">

                <p className="uppercase tracking-widest 
                text-[#5651e5]">Let's Connect</p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 
                p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 
                p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 
                p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 
                p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill/>
                </div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
 