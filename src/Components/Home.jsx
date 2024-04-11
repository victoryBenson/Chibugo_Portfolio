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
        <div  className='sm:flex order-last w-full md:px-10 px-5 gap-4'>  
            {/* left-side */}
            <div data-aos="fade-up" className=' flex flex-col justify-center '>
                <p id='wecome' className=' text-xl font-bold md:py-5 py-2'>
                    <span className='first-letter:text-3xl animate-bounce font-light'>Hi, </span>
                    <span className='text-black'>I'm <span className='text-[#314198] text-3xl font-extrabold'>Cynthia</span></span>
                </p>
                <h1 className="flex flex-wrap py-5 lg:text-2xl md:text-lg text-xl font-bold text-primary">
                    I'm 
                    <TypeAnimation 
                        sequence={[
                            ' a Freelancer',
                            2000,
                            ' a Financial Expert',
                            2000,
                            'a Data Analyst',
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
                <p className='font-mono'> I enjoy working with data and I feel that analytical skills and attention to detail are my greatest strengths.</p>
                <div className='flex flex-wrap gap-2 py-3 md:my-4 font-bold'>
                    <span>
                        <a href="#services" 
                            className='p-3 my-3 bg-primary flex text-secondary rounded-lg transition-all justify-center items-center hover:scale-105 duration-200 ease-in-out'>
                            Learn more 
                            <LiaExternalLinkAltSolid size={20}/>
                        </a>
                    </span>
                    <span>
                        <a href='https://docs.google.com/document/d/1dT-5kSd-0hqQBSQJcHj4C9OKruoUKl3D/edit?usp=sharing&ouid=106498312753727848708&rtpof=true&sd=true' target='_blank' 
                            className='flex border p-3 my-3 text-[#314198] transition-all rounded-lg justify-center items-center hover:scale-105 duration-200 ease-in-out '>
                            Resume
                            <IoDocumentAttachOutline size={20}/>
                        </a>
                    </span>
                </div>
            </div>
            {/* right-side(image) */}
            <div data-aos="zoom-in" className='hidden md:flex justify-center items-center m-2'>
                <p className='w-[20rem] h-[20rem] '>
                    <img src={`https://i.postimg.cc/L6wGnzTq/Photoroom-20240402-164343.png`} alt="myImage" className='w-full h-full rounded-full object-cover object-top ' />
                </p>
            </div>
        </div>
    </div>
  )
}
