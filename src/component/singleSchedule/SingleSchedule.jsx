import React from 'react'

const SingleSchedule = () => {
    return (
        <div className='pb-4 rounded-lg shadow-2xl bg-white mt-4' >
            <h2 className='text-white text-center text-xl bg-gray-700 w-full rounded-t-lg py-4'>Halim Hospital</h2>
            <div>
                <h3 className='mx-2 mt-2 text-lg font-semibold'>Location:</h3>
                <div className='mx-2'>
                    <p>Block L, North Nazimabad, Karachi</p>
                </div>
            </div>
            <div>
                <h3 className='mx-2 mt-2 text-lg font-semibold'>Timings:</h3>
                <div className='mx-2'>
                    <p>Monday 7PM to 9PM</p>
                    <p>Wednesday 7PM to 9PM</p>
                    <p>Friday 7PM to 9PM</p>
                </div>
            </div>
            <div>
                <h3 className='mx-2 mt-2 text-lg font-semibold'>Contact:</h3>
                <div className='mx-2'>
                    <p>03272057338</p>
                    <p>03408749434 (WhatsApp)</p>
                </div>
            </div>
        </div>
    )
}

export default SingleSchedule