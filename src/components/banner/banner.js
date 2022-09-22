import React from 'react'
import './banner.css'
import data from '../../assets/images/Data.svg';
import Button from '../button/button';


function Banner() {
  return (
    <div className='bannerContainer'>
        <div className='bannerLeft'>
            <h1>
                Let Technology <a>Transform</a> Your Business For Success
            </h1>
            
            <p>
                Insightful consultancy and unique custom solutions to create the perfect 
                technology solutions for our clients
            </p>

            <Button buttonText={'DISCOVER'}></Button>
        </div>

        <div className='bannerRight'>
            <img src={data} alt="Data" />
        </div>
    </div>
  )
}

export default Banner