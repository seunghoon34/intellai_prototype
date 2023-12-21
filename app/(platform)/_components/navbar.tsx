import { UserButton, currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'


import React from 'react'
import AiChatButton from './AiChatButton'
import { MobileSidebar } from './mobile-sidebar'

const Navbar = async () => {
    const user = await currentUser()
  return (
    <nav className='fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center justify-between'>
      <MobileSidebar />
        <div className='flex items-center gap-x-4'>
          <Link href='/dashboard'>
          <Image
            src={'/images/logo2.png'}
            width={150}
            height={120}
            alt = "logo"
            /></Link>
            
            
            
            

        </div>
        <div className='ml-auto flex items center gap-x-2 mr-5'>
            <AiChatButton/>
            <UserButton
            afterSignOutUrl='/'/>
            </div>
    </nav>
  )
}

export default Navbar