import React, {useEffect, useState} from 'react'
import {FiExternalLink} from 'react-icons/fi'
import { ServiceData } from './ServiceData' 
import {LiaTimesSolid} from 'react-icons/lia'
import AOS from "aos"
import "aos/dist/aos.css";
import { ServiceItems } from './ServiceItems'

export const Services = () => {
   const [popUp, setPopUp] = useState([]);
   const [popUpToggle, setPopUpToggle] = useState(false);


   const handleClick = (service) => {
    setPopUp([service])
    setPopUpToggle(!popUpToggle)
   }

   useEffect(() => {
    AOS.init({
      duration: 1500
    })    
  },[])

  return (
    <div data-aos="fade-up" data- id='services' className='sm:mx-10 p-4 sm:py-5'>
        <ul class="capitalize p-5">
            <li class="text-base md:text-lg font-bold uppercase">-services</li>
            <li class="font-extrabold md:text-4xl text-xl py-2 text-primary">my specializations</li>
        </ul>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                ServiceData.map((service, index)=>{
                    return (
                        <ServiceItems key={index} service={service}/>
                    )
                })
            }
        </div>
        {/* <div>
            {popUpToggle && (
                popUp.map((pop)=>{
                    return (
                        <div className='fixed top-0 bottom-0 flex items-center justify-center h-screen w-full  bg-primary'>
                            <div className='fixed flex items-center justify-center bg-[#1f2937]/70 z-40s inset-0 backdrop-blur-lg'></div>
                            <div className='md:w-2/3 w-4/5 h-auto relative shadow-lg  rounded bg-white overflow-y-auto'>
                                <button onClick={()=>handleClick(pop)} className='text-right absolute right-2 top-2 text-xl font-bold border rounded-full'><LiaTimesSolid/></button>
                                <div className='p-5 flex flex-col justify-between items-center m-auto h-96' >
                                    <p className='h-1/2 w-full '>
                                        <img src={pop.Image} alt="" className='p-2 rounded-2xl h-full w-full object-contain' />
                                    </p>
                                    <p className='p-5 font-light first-letter:text-xl first-letter:mr-1 first-letter:font-bold '>{pop.details}</p>
                                </div>
                            </div>
                        </div>
                    )
                }))
            }
        </div> */}
    </div>
  )
}