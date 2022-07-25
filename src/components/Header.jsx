import React from 'react'
import Hero from './Hero'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <Nav/>
        <Hero/>
    </div>
  )
}

export default Header