import React from 'react'
import Person_1 from "../assets/Person_1.jpg"
import Person_2 from "../assets/Person_2.jpg"
import Person_3 from "../assets/Person_3.jpg"
import Person_4 from "../assets/Person_4.jpg"


const RockingLobster = () => {
  return (
    <div className='bg-[beige] p-6 sm:p-0 sm:mb-[2rem] sm:mt-[1rem]'>
       <p align="center" className=' text-lg sm:text-2xl text-red-600 font-merienda
       '>SHOW US HOW YOU ROCK THE LOBSTER</p>
       <p align="center" className='font-merienda pt-1 sm:pt-2 text-sm sm:text-lg'>Tag your memories with #RedLobster</p>
       <div className='grid grid-cols-2 sm:grid-cols-4 pt-3 sm:pt-5'>
         <img src={Person_1} alt="Person_1"/>
         <img src={Person_2} alt="Person_2"/>
         <img src={Person_3} alt="Person_3"/>
         <img src={Person_4} alt="Person_4"/>
       </div> 
    </div>
  )
}

export default RockingLobster