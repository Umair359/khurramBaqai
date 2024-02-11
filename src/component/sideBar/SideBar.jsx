import React from 'react'
import SingleSchedule from '../singleSchedule/SingleSchedule.jsx'
const SideBar = () => {
    return (
        <div className='lg:w-1/4 w-full flex flex-col gap-4  p-8 shadow-2xl'>
            <h1 className='text-3xl font-bold text-center mb-2'>Schedules</h1>
            <div className='flex lg:flex-col flex-row gap-4 flex-wrap justify-center'>
                <SingleSchedule/>
                <SingleSchedule/>
                <SingleSchedule/>
                <SingleSchedule/>
                
            </div>
        </div>
    )
}

export default SideBar

/*

 <div className='bg-gray-200 p-2 rounded-lg ml-2 mt-1 '>
            <div className=' text-xl text-center my-2 font-bold'>Halim Hospital</div>
            <div className='flex flex-col font-semibold' >Location:   
                <ul className='my-2  ml-4 font-normal' >
                    <li><span className='text-justify' >Block L, North Nazimabad, Karachi</span></li>
                </ul>
            </div>
            <div className='flex flex-col font-semibold' >Timings:   
                <ul className='my-2  ml-4 font-normal' >
                    <li><span className='text-justify' >Monday 7PM to 9PM</span></li>
                    <li><span className='text-justify' >Wednesday 7PM to 9PM</span></li>
                    <li><span className='text-justify' >Friday 7PM to 9PM</span></li>
                </ul>
            </div>
            <div className='flex flex-col font-semibold' >Contact:   
                <ul className='my-2  ml-4 font-normal' >
                    <li><span className='text-justify' >03272057338</span></li>
                    <li><span className='text-justify' >03408749434 (WhatsApp) </span></li>
                </ul>
            </div>
        </div>
*/