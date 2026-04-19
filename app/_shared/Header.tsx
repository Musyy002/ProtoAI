"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'

export default function Header() {
    const {user}=useUser();
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.png'} alt='logo' width={40} height={40}/>
            <h2 className='text-xl font-bold'> <span className='text-primary'>UIUX </span> MOCKUP</h2>
        </div>
        <ul className='flex gap-10 items-center text-lg'>
            <li className='hover:text-primary cursor-pointer font-bold'>Home</li>
            <li className='hover:text-primary cursor-pointer font-bold'>Pricing</li>
        </ul>
        {!user ?
        <SignInButton mode='modal'>
            <Button >Get Started</Button>
        </SignInButton>
        :
            <UserButton/>

        }
    </div>
  )
}