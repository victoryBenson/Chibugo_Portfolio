import React, {useEffect} from 'react'
import myImage from '../assets/images/myImage.png'
import { TypeAnimation } from 'react-type-animation'
import {LiaExternalLinkAltSolid} from 'react-icons/lia'
import {IoDocumentAttachOutline} from 'react-icons/io5'
import AOS from "aos"
import "aos/dist/aos.css";


export const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 1500
        })    
      },[])

  return (
    <div id='home' className='flex justify-center items-center '>
        <div  className='flex flex-col md:flex-row w-full md:px-16 px-5 gap-4'>  
            {/* left-side */}
            <div data-aos="fade-up" className=' flex justify-center flex-col md:w-[50%] order-2 md:order-1'>
                <p id='wecome' className='md:py-5 py-2 flex items-center gap-2 '>
                    <span className='text-base hidden md:flex'>Hi there!</span>
                    <span className='text-base'>I'm <span className='text-primary text-xl font-extrabold'>Cynthia - </span></span>
                    <h1 className="flex flex-wrap lg:text-xl md:text-lg text-xl font-bold text-primary">
                        <TypeAnimation 
                            sequence={[
                                'Financial Accountant',
                                2000,
                                'Quick-Books Expert',
                                2000,
                                'a Bookkeeper',
                                2000,
                                // 'a Career Coach',
                                // 2000,
                                // 'a Business Consultant',
                                // 2000,
                            ]}
                            wrapper="div"
                            speed={30}
                            repeat={Infinity}
                            className='ml-1 text-gray-dark'
                        /> 
                    </h1>
                </p>
                <div className='text-base'> 
                    <p className='font-semibold text-2xl py-1'>I am a detail-oriented and results-driven Accountant with over 6-years of experience in bookkeeping, financial reporting, and tax preparation.</p> 
                    Proficient in using QuickBooks, managing accounts payable and receivable, and performing payroll processing. 
                    Seeking to leverage my skills and expertise in a dynamic organization to drive financial efficiency and compliance.
                </div>
                <div className='flex flex-wrap gap-4 py-3 md:my-4 font-bold'>
                    <span className='hidden'>
                        <a href="#services" 
                            className='p-3 my-3 bg-primary flex text-white rounded-lg transition-all justify-center items-center hover:scale-105 duration-200 ease-in-out'>
                            Learn more 
                            <LiaExternalLinkAltSolid size={20}/>
                        </a>
                    </span>
                    <span>
                        <a href='https://docs.google.com/document/d/1dT-5kSd-0hqQBSQJcHj4C9OKruoUKl3D/edit?usp=sharing&ouid=106498312753727848708&rtpof=true&sd=true' target='_blank' 
                            className='flex border p-3 px-5 my-3 text-white bg-primary transition-all rounded-lg justify-center items-center hover:scale-105 duration-200 ease-in-out '>
                            Resume
                            <IoDocumentAttachOutline size={20}/>
                        </a>
                    </span>
                </div>
            </div>
            {/* right-side(image) */}
            <div className='flex justify-center items-center m-2 md:w-[50%]'>
                <p className='w-[80%] h-[90%] '>
                    <img src={`https://i.postimg.cc/L6wGnzTq/Photoroom-20240402-164343.png`} alt="myImage" className='w-full h-full rounded-lg object-cover object-top ' />
                </p>
            </div>
        </div>
    </div>
  )
}
