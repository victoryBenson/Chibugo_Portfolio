import React, {useEffect} from 'react'
import { ExperienceItems } from './ExperienceItems'
import AOS from "aos"
import "aos/dist/aos.css";

const data = [
    {
        year : `2020 - 2024`,
        company: "Kaima Intergrated Network ventures(Nestle Distribution Company)",
        position: "Financial Accountant" ,
        job: "Job Description",
        role1: "Manage all financial accounting activities for business operations.",
        role2: "Respond to accounting related questions and inquiries from employees.",
        role3: "Perform month end closing activities such as account reconciliation, revenue accounting, expense accounting, etc."
    },
    {
        year : `2014-2020`,
        company: "Avery Nigeria Limited",
        position: "credit control officer" ,
        job: "Job Description",
        role1: "Creating procedures and policies that ensure timely payments while maintaining a high level of customer retention",
        role2: "Establish policies that follow customer service best practices while ensuring customers submit payments on time.",
        role3: "Develop and monitor a credit control system in collaboration with sales and marketing, finance and executive team members."
    },
    {
        year : `2013 - 2014 `,
        company: "Heming Safaris Africa",
        position: "Marketing Executive" ,
        job: "Job Description",
        role1: "Handle inquiries and requests from customers and address their needs",
        role2: "Stay on top of accounts, making sure they receive services that are within their budget and meet their needs",
        role3: "Meet regularly with other team members to discuss progress and find new ways to improve business"
    }
]
export const Experience = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500
        })    
      },[])
  return (
    <div data-aos ="fade-up" id='experience' className='sm:mx-10 p-4'>
        <ul class="capitalize px-5">
            <li class="text-base md:text-lg font-bold uppercase pl-5"> -know me more!</li>
            <li class="font-extrabold md:text-4xl text-xl py-2 text-primary">my Working experience</li>
        </ul>
        {
            data.map((item,id)=>(
                <ExperienceItems key={id} exp = {item}
                />
            ))
        }
    </div>
  )
}
