import React, { useEffect, useState } from 'react'
import {AiOutlineMenu,AiOutlineHome} from 'react-icons/ai'
import {MdWorkOutline, MdConnectWithoutContact}  from 'react-icons/md'
import {FaFacebookF, FaLinkedin,FaWhatsapp,FaLaptopCode,FaLink} from 'react-icons/fa'
import myImage from '../assets/images/myImage.png'
import {TfiVideoClapper} from 'react-icons/tfi'
import {SiGmail} from 'react-icons/si'
import {PiUserFocus} from'react-icons/pi'
import {RiMailDownloadLine} from 'react-icons/ri'

export const Sidenav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect(()=>{
        const body = document.querySelector('body');
        body.style.overflow = nav? 'hidden' : 'auto';
    }, [nav]);


  return (
    <div className='z-[] hidden'>
        {/* dropDown Menu */}
        <ul className='text-secondary bg-primary-focus top-0 md:hidden fixed z-[999] flex flex-wrap justify-between p-4 items-center w-full'>
            <li className='font-bold text-lg'>Chibugo Cynthia A.</li>
            <li><AiOutlineMenu onClick={handleNav} className=' text-white ' size={20}/></li>
        </ul>
        {
            nav?(
                <div onClick={handleNav} className='z-[99] flex flex-col items-center max-w-[1040px] m-auto p-4 py-20  min-h-full w-full fixed bg-black/90 '>
                    <a 
                    href="#home"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <AiOutlineHome/>
                        <span className="pl-2">home</span>
                    </a>
                    <a 
                    href="#about"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <PiUserFocus/>
                        <span className="pl-2">about</span>
                    </a>
                    <a 
                    href='https://docs.google.com/document/d/1dT-5kSd-0hqQBSQJcHj4C9OKruoUKl3D/edit?usp=sharing&ouid=106498312753727848708&rtpof=true&sd=true' 
                    target='_blank' 
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <RiMailDownloadLine/>
                        <span className="pl-2">resume`</span>
                    </a>
                    <a 
                    href="#services"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <FaLaptopCode/>
                        <span className="pl-2">services</span>
                    </a>
                    <a 
                    href="#video"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <TfiVideoClapper/>
                        <span className="pl-2">intro video</span>
                    </a>
                    <a 
                    href="#contact"
                    className='btn btn-outline bg-stone-300 hover:bg-stone-400 hover:text-white w-full m-2 '
                    onClick={handleNav} >
                        <MdConnectWithoutContact/>
                        <span className="pl-2">contact</span>
                    </a>
                    <ul className='text-stone-200 flex flex-col justify-center items-center py-5 w-full'>
                        <li className='py-3 font-bold capitalize flex flex-wra justify-center items-center mx-2'> let's connect <MdConnectWithoutContact size={20}/></li>
                        <li className='flex flex-wrap justify-evenly min-w-full p-2'>
                            <a href="http://"><FaFacebookF size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="https://linkedin.com/in/cynthia-chibugo-88092b139" target='_blank'><FaLinkedin size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="mailto:"><SiGmail size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="http://wa.me/+2347034798736"target='_blank'><FaWhatsapp size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                        </li>
                    </ul>
                </div>
            )
            : (
                null
            )
        }

        {/* sideNav  */}
        <div className='w-1/4 fixed bg-primary max-w-[1040px] m-auto items-center justify-center md:flex flex-col hidden h-screen '>
            <div className='py-2'>
                <div className='flex flex-col justify-center items-center '>
                    <p className=''>
                        <img src={myImage} alt="myImage" className='active w-24 h-24 rounded-full object-cover object-top' />
                    </p>
                    <p className='p-2 lg:text-xl  capitalize font-black text-secondary'>ayoka cynthia chibugo</p>
                </div>
                <div className='py-2 text-primary-focus text-center m-auto justify-center items-center flex flex-col capitalize font-bold '>
                    <a 
                    href="#home"
                    className='flex items-center w-full p-2 lg:m-2 justify-center rounded-full hover:bg-secondary transition-all duration-500 ease-in hover:110'
                    >
                        <AiOutlineHome className='mr-2' />
                        home
                    </a>
                    <a 
                    href="#about"
                    className=' flex items-center w-full p-2 lg:m-2 justify-center rounded-full hover:bg-secondary transition-all duration-500 ease-in hover:110'
                    >
                        <PiUserFocus className='mr-2' />
                        about me
                    </a>
                    <a 
                    href="#services"
                    className='flex items-center w-full p-2 lg:m-2 justify-center rounded-full hover:bg-secondary transition-all duration-500 ease-in hover:110'
                    >
                        <FaLaptopCode className='mr-2' />
                        services
                    </a>
                    <a 
                    href="#video"
                    className='flex items-center w-full p-2 lg:m-2 justify-center rounded-full hover:bg-secondary transition-all duration-500 ease-in hover:110'
                    >
                        <TfiVideoClapper className='mr-2' />
                        intro video
                    </a>
                    <a 
                    href="#contact"
                    className='flex items-center w-full p-2 lg:m-2 justify-center rounded-full hover:bg-secondary transition-all duration-500 ease-in hover:110'
                    >
                        <MdConnectWithoutContact className='mr-2' />
                        contact
                    </a>
                </div>
                <div className="flex justify-evenly w-full text-secondary py-2">
                    <a href="http://"><FaFacebookF size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                    <a href="https://linkedin.com/in/cynthia-chibugo-88092b139" target='_blank'><FaLinkedin size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                    <a href="mailto:"><SiGmail size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                    <a href="http://wa.me/+2347034798736" target='_blank'><FaWhatsapp size={20} className=" hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                </div>
                <div class="p-2 py- text-primary-content ">
                  <p>Copyright © 2023 <span class="font-bold">Cynthia A. Chibugo</span> - All right reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}
