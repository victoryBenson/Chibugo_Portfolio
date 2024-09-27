import React from 'react'

export const ServiceItems = ({service}) => {
    
  return (
    <div className='hover:cursor-pointer'>
        <p className=' p-2 text-start text-lg'>{service.number}</p>
        <p className='font-bold p-2 text-lg capitalize'>{service.title}</p>
        <p className='p-2 px-4 text-gray-dark'>{service.duty}</p>
        <div className='py-3 hidden'>
            <button onClick={()=> alert('helloWorld!' + `${service.duty}`)} className='hover:scale-110 duration-500 transition-all flex items-center justify-center bg-primary text-secondary p-2 rounded-full mx-5 capitalize font-bold'>{service.link}</button>
        </div>
    </div>
  )
}
