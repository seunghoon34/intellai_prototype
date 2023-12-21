import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = async () => {
 
  const user = await currentUser()
  const clerkId = user?.id
  const userId = await db.user.findFirst({
    where:{
      clerkId: clerkId
    }
  })
  const session = await db.practiceSession.findFirst({
    where:{
      userId: userId!.id
    }
  
  })
  
  return (
    <div>quiz page
      <div>
          <Link href={'/quiz/' + session!.practiceSessionId}>start</Link>
          
        </div>
    </div>
  )
}

export default page