
import { createUser } from '@/actions/create-user'
import { currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {

  
    const user = await currentUser()
    const userId = user!.id
    createUser(userId)
    redirect('/dashboard')

    
  return (
    <></>
  
    
    
  )
}

export default page