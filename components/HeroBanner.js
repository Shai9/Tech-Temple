import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
          <p className='bose'>SMALLTEXT</p>
          <h3>MIDTEXT</h3>
          <img src='' alt='headphones' className='hero-banner-image' />
      </div>
      <div>
        <Link href='/product/ID' >
          <button type='button'>BUTTON TEXT</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>ACTUAL DESCRIPTION</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner