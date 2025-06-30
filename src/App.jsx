import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Popular_Destinations from './component/Popular_Destinations'
import Special_Offer from './component/Special_Offer'
import Our_Blog from './component/Our_Blog'
import Trip_Planners from './component/Trip_Planners'
import Destination_Gallery from './component/Destination_Gallery'
import Traveler_Experiences from './component/Traveler_Experiences'
import Our_Newsletter from './component/Our_Newsletter'
import Footer from './component/Footer'
const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Popular_Destinations/>
      <Special_Offer/>
      <Our_Blog/>
      <Trip_Planners/>
      <Destination_Gallery/>
      <Traveler_Experiences/>
      <Our_Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
