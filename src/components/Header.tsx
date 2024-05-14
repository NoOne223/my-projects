import React from 'react'
import { Mouseclick, flagcn, flagen, flagfr, flagjp, flagvi } from '../assets/img/Image'
import { HDvideo } from '../assets/video/Video'

const Header = () => {
  return (
    <div>
      <video className='w-full h-119' src={HDvideo} autoPlay loop muted></video>
      <div className='absolute top-0 h-119 w-full flex flex-col gap-y-5 justify-center items-center text-white bg-curtain'>
        <h1 className=' text-9xl'>Fun & free</h1>
        <a href='#open' className='flex flex-col items-end text-2xl'>
          <span>You can travel around the world just with one click</span>
          <img className='w-6 filter-img' src={Mouseclick}></img>
        </a>
      </div>
    </div>
  )
}

export default Header