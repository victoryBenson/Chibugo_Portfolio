import React, {useState, useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import { MdConnectWithoutContact}  from 'react-icons/md'
import {CiMenuFries} from 'react-icons/ci'
import {FaFacebookF, FaLinkedinIn,FaWhatsapp,FaLaptopCode} from 'react-icons/fa'
import {TfiVideoClapper} from 'react-icons/tfi'
import {SiGmail} from 'react-icons/si'
import {PiUserFocus} from'react-icons/pi'
import {RiMailDownloadLine} from 'react-icons/ri'
import {BsArrowRightCircle} from 'react-icons/bs'


export const Navbar = () => {
    const [mobile, setMobile] = useState(false)

    const handleMobile = () =>{
        setMobile(!mobile)
    }

    useEffect(()=>{
        const body = document.querySelector('body');
        body.style.overflow = mobile? 'hidden' : 'auto';
    }, [mobile])
 
    
  return (
    <div className='z-40 fixed top-0 w-full '>
        <div className='flex justify-between items-center h-20 bg-[#f0d6e8] shadow-lg px-2'>
             <div className=' relative'>
                <p className=' font-bold lg:text-3xl text-2xl text-[#314198] text-center'>Chibugo Cynthia A.</p>
            </div>
            <ul className='hidden lg:flex items-center font-bold text-gray-dark'>
                <a href='#home' className= "hover:underline decoration-primary decoration-2 underline-offset-4" >
                    <li className='flex items-center px-3 py-2 rounded-lg'>Home</li>
                </a>
                <a href='#about' className= "hover:underline decoration-primary decoration-2 underline-offset-4" >
                    <li className='flex items-center px-3 py-2 rounded-lg'>About</li>
                </a>
                <a href='#services' className= "hover:underline decoration-primary decoration-2 underline-offset-4" >
                    <li className='flex items-center px-3 py-2 rounded-lg'>Services</li>
                </a>
                <a href='#experience' className= "hover:underline decoration-primary decoration-2 underline-offset-4" >
                    <li className='flex items-center px-3 py-2 rounded-lg'>Experience</li>
                </a>
                <a href='#contact' className= "hover:underline decoration-primary decoration-2 underline-offset-4" >
                    <li className='flex items-center px-3 py-2 rounded-lg'>Contact</li>
                </a>
            </ul>
            <div className='text-center'>
                <p className="lg:flex hidden text-primary">
                    <a href="https://www.facebook.com/cynthiachibugoayoka" target='_blank'><FaFacebookF size={20} className=" mx-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                    <a href="https://linkedin.com/in/cynthia-chibugo-88092b139" target='_blank'><FaLinkedinIn size={20} className="mx-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                    <a href="mailto:cynthiaayoka23@gmail.com" target='_blank'><SiGmail size={20} className="mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                    <a href="http://wa.me/+2347034798736" target='_blank'><FaWhatsapp size={20} className="text-[#319852] mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                </p>
            </div>
            {/* mobile view btn */}
            <div className='flex lg:hidden'>
                <p><CiMenuFries onClick={handleMobile} className=' text-primary-content duration-700 transition-all' size={30}/></p>
                {/* dropdown */}
                {
                    mobile && (
                        <div  className='sm:w-2/4 w-3/4 fixed shadow-lg right-0 md-right-0 top-0 h-full z-[999] duration-500 transition-all'>
                            <div onClick={handleMobile} className='bg-[#1f2937]/70  fixed top-0 left-0 right-0 h-full w-full duration-500 transition-all'></div>
                            <div className='relative bg-white h-full overflow-y-scroll'>
                                <div onClick={handleMobile} className='flex p-5 justify-center items-center duration-700 transition-all'>
                                    <BsArrowRightCircle size={30} className='animate-pulse text-gray'/>
                                </div>
                                <div className='relative flex flex-col items-center justify-center font-bold text-gray-dark'>
                                    <a 
                                        href="#home"
                                        className='capitalize flex items-center py-3 hover:underline decoration-primary decoration-2 underline-offset-4'
                                        onClick={handleMobile} >
                                            {/* <AiOutlineHome/> */}
                                            <span className="pl-2">home</span>
                                    </a>
                                    <a 
                                        href="#about"
                                        className='capitalize flex items-center py-3 hover:underline decoration-primary decoration-2 underline-offset-4'
                                        onClick={handleMobile} >
                                            {/* <PiUserFocus/> */}
                                            <span className="pl-2">about</span>
                                    </a>
                                    <a 
                                        href='https://docs.google.com/document/d/1dT-5kSd-0hqQBSQJcHj4C9OKruoUKl3D/edit?usp=sharing&ouid=106498312753727848708&rtpof=true&sd=true' 
                                        target='_blank' 
                                        className='capitalize flex items-center py-3 hover:underline decoration-primary decoration-2 underline-offset-4'
                                        onClick={handleMobile} >
                                            {/* <RiMailDownloadLine/> */}
                                            <span className="pl-2">resume`</span>
                                    </a>
                                    <a 
                                        href="#services"
                                        className='capitalize flex items-center py-3 hover:underline decoration-primary decoration-2 underline-offset-4'
                                        onClick={handleMobile} >
                                            {/* <FaLaptopCode/> */}
                                            <span className="pl-2">services</span>
                                    </a>
                                    <a 
                                        href="#experience"
                                        className='capitalize flex items-center py-3 hover:underline decoration-primary decoration-2 underline-offset-4'
                                        onClick={handleMobile} >
                                            {/* <FaLaptopCode/> */}
                                            <span className="pl-2">experince</span>
                                    </a>
                                    <a 
                                        href="#contact"
                                        className='capitalize flex items-center py-3 hover:underline decoration-primary decoration-2 underline-offset-4'
                                        onClick={handleMobile} 
                                    >
                                            {/* <MdConnectWithoutContact/> */}
                                        <span className="pl-2">contact</span>
                                    </a>
                                </div>
                                <div className='text-center'>
                                   <p className='py-3 text-primary font-bold capitalize flex flex-wrap justify-center items-center text-lg '> let's connect <MdConnectWithoutContact size={20}/></p>
                                    <p className="flex flex-wrap w-full justify-center items-center p-2">
                                        <a href="http://"><FaFacebookF size={20} className=" mx-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                                        <a href="https://linkedin.com/in/cynthia-chibugo-88092b139" target='_blank'><FaLinkedinIn size={20} className="mx-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                                        <a href="mailto:"><SiGmail size={20} className="mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                                        <a href="http://wa.me/+2347034798736" target='_blank'><FaWhatsapp size={20} className="text-[#319852] mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                                    </p>
                                </div>
                            </div>
                        </div> 
                    )
                }
            </div>
        </div>
    </div>
  )
}
