import React from 'react'
import Footer from '../Elements/Footer'
import Heroimg from '../Elements/Heroimg'
import Navbar from '../Elements/Navbar'
import Work from '../Elements/Work'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimg />
        <Work/>
        <Footer />
    </div>
  )
}

export default Home