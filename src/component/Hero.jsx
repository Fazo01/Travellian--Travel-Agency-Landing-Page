import React from 'react'
import { HeroImg } from '../assets'
const Hero = () => {
  return (
    <section>
      <img src={HeroImg} alt="" className='w-full' />
      <div>
        <div>
          <h1>Start your unforgettable <br />
          journey with us.</h1>
          <p>The best travel for your jouney begins now</p>
        </div>
        <div className="">
          <div className="d"></div>
          <div className="">
            <p>Book Now</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
