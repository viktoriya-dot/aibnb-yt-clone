// React functional component export - rfce
import React from 'react'

function Banner() {
  return (
    <div className='w-11/12 m-auto text-white bg-[#FF3860] rounded-xl flex  py-9 px-2 justify-center items-center  text-center my-8 md:h-[400px]'>
        <div>
            <h2 className='text-3xl font-semibold md:text-4xl md:mb-10'>Help house 100,000 refugees<br /> fleeing Ukraine</h2>
            <button className='rounded-md border py-1 px-2 border-white mt-6 align-self-center md:px-5 md:py-4'>Learn more</button>
        </div>
    </div>
  )
}

export default Banner