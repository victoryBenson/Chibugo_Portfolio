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
    const [isActive, setIsActive] = useState(false)

    const handleMobile = () =>{
        setMobile(!mobile)
    }

    useEffect(()=>{
        const body = document.querySelector('body');
        body.style.overflow = mobile? 'hidden' : 'auto';
    }, [mobile])

    const scrollToTop = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    }

    useEffect(()=> {
        window.addEventListener('scroll', () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
      })


 
    
  return (
    <div className= {`${isActive && 'fixed inset-0  top-0 transition-all duration-200 backdrop-blur w-[100%] m-0 p-0 flex z-[999] bg-[#f0d6e8] '} bg-[#f0d6e8] z-[999] h-20 flex items-center justify-center w-[100%] m-0 p-0 `}>
        <div className='flex justify-between items-center h-20 px-5 w-full shadow'>
            <div className='flex items-center'>
                {
                    isActive && 
                        <p  data-aos="zoom-in" className=''>
                            <img src={`https://i.postimg.cc/L6wGnzTq/Photoroom-20240402-164343.png`} alt="myImage" className=' w-16 h-16 rounded-full object-cover object-top border-1 border-primary/10' />
                        </p>
                }
                <div className=' relative px-2'>
                    <p className=' font-bold lg:text-3xl text-xl text-[#314198] text-center'>Chibugo Cynthia A.</p>
                </div>
            </div>
            <ul className='hidden md:flex items-center font-bold text-gray-dark'>
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
                        <div  className='sm:w-2/4 w-3/4 fixed shadow-lg h-screen right-0 md-right-0 top-0 z-[999] duration-500 transition-al'>
                            <div onClick={handleMobile} className='bg-[#000000]/30  fixed top-0 inset-0 h-screen w-full duration-300 transition-all'></div>
                            <div className='relative bg-whit h-full overflow-y-scroll bg-white'>
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
