import React from 'react'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-center pt-16'>
      <h1 className='text-5xl text-gray-600'>InvestIQ Products</h1>
      <h4 className='pt-3'>Sleek, modern, and intuitive trading platforms</h4>
      <p className='py-3'>Check out our
        <Link to={'/'}>
        investment offerings
        
        <i
                  className="fa-solid fa-arrow-right ml-2 text-blue-500"
                  aria-hidden="true"
                ></i>
        </Link>
      </p>
    </div>
  )
}

export default Hero
