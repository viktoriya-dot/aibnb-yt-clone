import React from 'react'

function Banner2() {
  return (

  <div className="w-11/12 h-[600px] m-auto relative  bg-[url('/airbbanner.webp')] bg-center bg-cover rounded-xl">

     <div className='absolute top-2/3 w-full text-center '>
          <h1 className=' text-white text-l sm:text-3xl'>Let your curiosity do the booking</h1>
          <button className=' bg-white rounded-full px-5 py-4 mt-5 shadow-md font-bold my-3 hover:bg-[#faf4f4e6] active:scale-90 transition duration-150 outline-white'>
              <span className='text-l leading-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>I’m flexible
              </span>
          </button>
     </div>
      </div>
  )
}

export default Banner2
// <Image className='rounded-xl bg-clip-border'
    //     src='/airbbanner.webp'
    //     layout='fill'
    // />