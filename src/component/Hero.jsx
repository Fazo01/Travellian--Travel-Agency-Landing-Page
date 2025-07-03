import React from 'react'
import { HeroContent } from '../constant'
import { HeroImg } from '../assets'
const Hero = () => {
  return (
    <section className='z-1'>
      <img src={HeroImg} alt="" className='w-full ' />
      <div className='lg:pl-39 md:pl-10 pl-8 absolute top-0'>
        <div className=' text-white'>
          <h1 className='w-full lg:text-[84px] md:text-[64px] sm:text-[54px] text-[40px] '>Start your unforgettable <br />
          journey with us.</h1>
          <p className='sm:text-[24] ss:text-[20px] text-[18px]'>The best travel for your jouney begins now</p>
        </div>
        <div className="flex justify-center items-center rounded-r-[20px] ">
          <div className="">
            {HeroContent.map((data)=>{
              <div className="bg-amber-50" key={data.id}>
                
                <p>{data.title}</p>
                <p>{data.input}</p>
              </div>
            })}
          </div>
          <div className="">
            <p className='text-[36px] text-white'>Book Now</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
