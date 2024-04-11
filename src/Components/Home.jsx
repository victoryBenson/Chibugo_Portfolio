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
    <div id='home' className='flex justify-center items-center mt-20 pt-20'>
        <div  className='grid md:grid-cols-2 grid-cols-1 w-full sm:p-10 p-5'>
            {/* left-side */}
            <div data-aos="fade-up" className=' flex flex-col justify-center m-2'>
                <p id='wecome' className='text-[#314198] text-xl font-bold first-letter:text-3xl md:py-5 py-2 animate-pulse'>hi there!</p>
                <h1 className="flex flex-wrap py-5 lg:text-4xl md:text-lg text-xl font-bold text-primary">
                    I'm 
                    <TypeAnimation 
                        sequence={[
                            'Ayoka Cynthia C.',
                            2000,
                            ' a Freelancer',
                            2000,
                            ' a Financial Expert',
                            2000,
                            'a Data Analyst',
                            2000,
                            'a Career Coach',
                            2000,
                            'a Business Consultant',
                            2000,
                        ]}
                        wrapper="div"
                        speed={30}
                        repeat={Infinity}
                        className='ml-1 text-gray-dark'
                    /> 
                </h1>
                <p className='font-mono sm:p-3'> I enjoy working with data and I feel that analytical skills and attention to detail are my greatest strengths–</p>
                <div className='flex flex-wrap gap-2 py-3 md:my-4 font-bold lg:w-2/3 md:w-4/5 sm:w-1/2 w-full justify-between'>
                    <a href="#services" 
                        className='p-3 my-3 bg-primary flex text-secondary  rounded-lg border-none duration-500 transition-all ease-in hover:scale-110 justify-center items-center'>
                        Learn more 
                        <LiaExternalLinkAltSolid size={20}/>
                    </a>
                    <a href='https://docs.google.com/document/d/1dT-5kSd-0hqQBSQJcHj4C9OKruoUKl3D/edit?usp=sharing&ouid=106498312753727848708&rtpof=true&sd=true' target='_blank' 
                        className='flex border p-3 my-3 text-[#314198] duration-500 transition-all ease-in hover:scale-110 rounded-lg justify-center items-center '>
                        Resume
                        <IoDocumentAttachOutline size={20}/>
                    </a>
                </div>
            </div>
            {/* right-side(image) */}
            <div data-aos="zoom-in" className='hidden md:flex justify-center items-center m-2'>
                <p className=''>
                    <img src={`https://i.postimg.cc/L6wGnzTq/Photoroom-20240402-164343.png`} alt="myImage" className='w-[28rem] h-[28rem] rounded-full object-cover object-top border-8 border-primary/30' />
                </p>
                {/* <p className='p-2 lg:text-xl  capitalize font-black text-gray'>ayoka cynthia chibugo</p> */}
            </div>
        </div>
    </div>
  )
}
