import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-4 bg-red-400 text-white mt-[2rem] sm:mt-auto justify-items-start h-fit'>
        <div className='flex mt-0 sm:mt-[2rem] mb-0 sm:mb-[2rem] flex-col gap-2 p-[2rem] sm:p-0'>
            <p className='font-bold font-merienda text-xl'>ABOUT RED LOBSTER</p>
            <p>Sea food with Standards</p>
            <p>RL in community</p>
            <p>FAQ</p>
            <p>Allergy Guide</p>
            <p>Nutrition Guide</p>
            <p>Red Lobster at Home</p>
        </div>
        <div className='mt-0 sm:mt-[2rem] mb-0 sm:mb-[2rem] flex flex-col gap-2 p-[2rem] sm:p-0'>
            <p className='font-bold font-merienda text-xl'>CARRERS</p>
            <p>Work With Us</p>
            <p>Hourly Opportunities</p>
            <p>Management Opportunities</p>
            <p>Corperate Opportunities</p>
        </div>
        <div className='mt-0 sm:mt-[2rem] mb-0 sm:mb-[2rem] flex flex-col gap-2 p-[2rem] sm:p-0'>
            <p className='font-bold font-merienda text-xl'>COMPANY INFO</p>
            <p>News & Press</p>
            <p>US Locations</p>
            <p>International Locations</p>
            <p>Become a Supplier</p>
        </div>
        <div className='mt-0 sm:mt-[2rem] mb-0 sm:mb-[2rem] flex flex-col gap-2 p-[2rem] sm:p-0'>
            <p className='font-bold font-merienda text-xl'>GET IN TOUCH</p>
            <p>Contact Us</p>
        </div>

    </div>
  )
}

export default Footer