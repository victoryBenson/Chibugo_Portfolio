import React, {useEffect} from 'react'
import { SiGmail } from 'react-icons/si'
import {FaFacebookF, FaLinkedinIn,FaWhatsapp} from 'react-icons/fa'
import AOS from "aos"
import "aos/dist/aos.css";


export const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500
        })    
      },[])

  return (
    <div data-aos = "fade-up" id="contact" className="md:py-16 sm:mx-10 flex justify-center items-center p-4 ">
        <div class="">
            <div class="grid md:grid-cols-2 sm:gap-2 ">
                {/* <!-- right --> */}
                <div class=" md:w-full ">
                    <div class="p-">
                        <ul class="capitalize ">
                            <li class="text-base md:text-lg font-bold uppercase">-let's connect</li>
                            <li class="font-extrabold md:text-4xl text-xl py-2 text-primary">get in touch</li>
                        </ul>
                        <p class="py-2 tracking-wide">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
                        <div className='p-3'>
                            <p className="flex text-primary">
                                <a href="https://www.facebook.com/cynthiachibugoayoka" target='_blank'><FaFacebookF size={20} className="text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                                <a href="https://linkedin.com/in/cynthia-chibugo-88092b139" target='_blank'><FaLinkedinIn size={20} className="mx-3 text-[#314198] hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                                <a href="mailto:cynthiaayoka23@gmail.com" target='_blank'><SiGmail size={20} className="mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                                <a href="http://wa.me/+2347034798736" target='_blank'><FaWhatsapp size={20} className="text-[#319852] mx-3 hover:scale-110 duration-200 ease-in cursor-pointer"/></a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- left --> */}
                {/* <div class=" md:w-full">
                    <form action="https://getform.io/f/0d3fb5b7-3d81-4881-94b8-74a0a4de2917" method="POST" encType='multipart/form-data'class="py-2 capitalize ">
                        <div class="my-3">
                            <input type="text" onfocus="this.value = '' " placeholder="Enter your name:"  class="p-2 outline-none bg-white text-gray-dark rounded-lg  w-full" />
                        </div>
                        <div class="my-3">
                            <input type="email" onfocus="this.value = '' " placeholder="Your email:" class="p-2 outline-none bg-white text-gray-dark rounded-lg w-full " />
                        </div>
                        <div class="my-3">
                            <textarea class="rounded-lg bg-[#ffff] outline-none bg-opacity-40 textarea w-full h-[10rem] text-lg p-2 " placeholder="write something:"></textarea>
                        </div>
                        <div className='flex items-center justify-center group decoration-4 relative py-4 font-bold m-4 h-14 '>
                            <button type="submit" value="send" class="rounded-full p-3 font-bold w-full text-white z-20 ">Send now</button>
                            <span className='absolute group-hover:rounded-full rounded-l-full md:h-full h-2/3 sm:w-40 w-20 transition-all group-hover:w-full -left-2 bg-primary text-secondary z-10 shadow-lg duration-700'></span>
                        </div>
                    </form>
                </div> */}
            </div>
            {/* map  */}
           <div id='map' class="relative h-96 w-full mx-auto py-10">
                <p>Map</p>
                <div class="absolute inset-0 right-0 left-0 top-10  ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63545.24913372989!2d6.977060246842966!3d5.480775982906745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042599d25620855%3A0x3df49e1d3b9f730d!2sOwerri%20Municipal%2C%20Imo!5e0!3m2!1sen!2sng!4v1682094327515!5m2!1sen!2sng" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
           </div>
        </div>
    </div>
  )
}

