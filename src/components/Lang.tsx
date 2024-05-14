import React from 'react'
import { flagcn, flagen, flagfr, flagjp, flagvi } from '../assets/img/Image'

const Lang = () => {
  return (
    <div>
        <div className='absolute right-36'>
            <select className='p-1 bgblack'>
                <option value={1}>English</option>
                <option value={2}>French</option>
                <option value={3}>Vietnamese</option>
                <option value={4}>Japanese</option>
                <option value={5}>Chinese (Mandarin)</option>
                <option value={6}>Spanish</option>
            </select>
        </div>
    </div>
  )
}

export default Lang
