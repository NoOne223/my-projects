import React from 'react'
import Country from './Country';
import Lang from './Lang';

const Body = () => {
  return (
    <div className='container'>
      <Lang />
        <div className='mt-12 mb-10 text-center'>
            <h3 className='text-6xl my-4'>Welcome to our travel online website</h3>
            <span className='text-4xl'>Here you can chose what country you want to go</span>
        </div>
        <Country />
    </div>
  )
}

export default Body
