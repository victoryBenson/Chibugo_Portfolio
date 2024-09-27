import React from 'react'

export const ExperienceItems = ({exp}) => {
  return (
    <ul>
        <li>
            <div className='grid grid-cols-1 m-1 gap-2 divide-secondary border-b border-[#314198] py-10'>
                <div>
                    <ul className='flex flex-wrap justify-between items-center'>
                        <li className='bg-primary p-2 rounded font-bold text-white shadow-lg '>{exp.year}</li>
                        <li className='text-gray-dark font-bold text-base md:text-lg py-2 capitalize'>{exp.company}</li>
                    </ul>
                    <p className='font-bold text-base md:text-lg py-2 capitalize'>Position: {exp.position}</p>
                    <p className='text-stone-700 font-bold'>{exp.job}</p>
                    <ul className='list-disc pl-10'>
                        <li className='p-2'>{exp.role1}</li>
                        <li className='p-2'>{exp.role2}</li>
                        <li className='p-2'>{exp.role3}</li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
  )
}
