import React, { useState, useEffect } from 'react'
import { FaGooglePlusG} from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {FaFacebookF, FaLinkedinIn,FaWhatsapp} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import introVideo from '../assets/video/introVideo.mp4'
import AOS from "aos"
import "aos/dist/aos.css";

export const About = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        AOS.init({
          duration: 1500
        })    
      },[])

  return (
    <div  id='about' className='sm:mx-10 mx-'>
        <div class="p-4 md:py-20">
            <ul class="capitalize p-3">
                <li class="text-lg font-bold uppercase ">-Nice to meet you!</li>
                {/* <li class="font-extrabold text-4xl py-2 text-primary">About me</li> */}
            </ul>
            <div id="video" class=" p-4 ">
                <div data-aos = 'zoom-in' className='w-full flex justify-center items-center h-80 '>
                    <video src={introVideo} className=' h-full lg:w-1/2 w-full bg-white' controls/>
                </div>
            </div>
            {/* <div class="p-1 m-1 hidden">
                <div className=''>
                    <p class="p-2 tracking-wide items-center"> Hello there! My name is <a href="#about" class=" font-bold capitalize">Ayoka Cynthia Chibugo</a>. I am a Financial Accountant & Data Analyst, and I'm very passionate and dedicated to my work.</p>
                    <p class="p-2 tracking-wide">With over 10years experience as an Accountant and Data Analyst, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of Accounting.</p>
                    <div className='py-5'>
                        <p className='font-bold py-5 text-2xl text-gray-dark'>Let's Connect</p>
                        <p className="flex text-primary">
                            <a href="https://www.facebook.com/cynthiachibugoayoka" target='_blank'><FaFacebookF size={20} className=" mr-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="https://linkedin.com/in/cynthia-chibugo-88092b139" target='_blank'><FaLinkedinIn size={20} className="mx-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="mailto:cynthiaayoka23@gmail.com" target='_blank'><SiGmail size={20} className="mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            <a href="http://wa.me/+2347034798736" target='_blank'><FaWhatsapp size={20} className="text-[#319852] mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                        </p>
                    </div>
                </div>
            </div> */}
            {/* <!-- check out --> */}
            <div class="justify-center min-h-max  items-center m-auto hidden">
                <div class="mx-auto p-1 w-full">
                    <div class="grid md:grid-cols-3 grid-cols-1 gap-2 ">
                        {/* <!-- start --> */}
                        <div data-aos = "fade-left" class="text-center text-primary mx-auto">
                            <p class="font-extrabold text-5xl">10+</p>
                            <p class="uppercase py-1">year of experience</p>
                        </div>
                        {/* <!-- middle --> */}
                        <div data-aos = "flip-right"  class="text-center mx-auto text-[#314198]">
                            <p class="font-extrabold text-5xl">50+</p>
                            <p class="uppercase py-1">completed projects</p>
                        </div>
                        {/* <!-- end --> */}
                        <div data-aos = "flip-right" class="text-center mx-auto">
                            <p class="font-extrabold text-5xl">30+</p>
                            <p class="uppercase py-1">happy clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
