import { SignIn } from '@clerk/clerk-react'
import React from 'react'

export default function signin() {
  return (
    <div className='sign-in'>
    <SignIn />
    </div>
  )
}