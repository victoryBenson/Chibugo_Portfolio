import React from 'react'
import {FaFacebookF,FaWhatsapp,FaLinkedin} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

export const Footer = () => {
  return (
    <div className='flex flex-col sm:h-60 justify-center items-center bg-primary text-white p-4'>
        <div className=' w-full md:w-1/2 flex flex-wrap justify-center gap-4 items-center py-5 text-lg'>
            <a href="#home" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>home</a>
            <a href="#about" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>about</a>
            <a href="#contact" className='cursor-pointer hover:scale-110 duration-200 ease-in capitalize'>contact</a>
        </div>
        <div className='md:flex block flex-wrap justify-around items-center w-full pt-4 '>
            {/* <div>
                <p className='font-medium tracking-widest '>Copyright © 2023 - All right reserved by <span className='font-black text-primary text-lg'>Chibugo Cynthia .A</span> </p>
            </div> */}
            <div className="flex md:justify-between sm:justify-evenly justify-center py-4">
                <a href="https://www.facebook.com/cynthiachibugoayoka" target='_blank'><FaFacebookF size={20} 
                    className=" hover:scale-110 duration-500 transition-all ease-in cursor-pointer mx-2"/>
                </a>
                <a href="https://linkedin.com/in/cynthia-chibugo-88092b139" target='_blank' ><FaLinkedin size={20} 
                    className=" hover:scale-110 duration-500 transition-all ease-in cursor-pointer mx-2"/>
                </a>
                <a href="mailto:cynthiaayoka23@gmail.com" target='_blank'><SiGmail size={20} 
                    className=" hover:scale-110 duration-500 transition-all ease-in cursor-pointer mx-2"/>
                </a>
                <a href="http://wa.me/+2347034798736" target='_blank'><FaWhatsapp size={20} 
                    className=" hover:scale-110 duration-500 transition-all ease-in cursor-pointer mx-2"/>
                </a>
            </div>
        </div>
    </div>
  )
}
