import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getUser } from '@/actions/get-user';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import { CreatePracticePopover } from '../../_components/createpracticepopover';
import section from '../../_components/sectionFilter';
import topic from '../../_components/topicFilter';

const page = async () => {
  const clerkUser = await currentUser()
    const user = await db.user.findFirst({
        where:{
            clerkId: clerkUser!.id
        }
    })
    const userId = user!.id
  const data = await db.practiceSession.findMany({
    where: { userId: userId},
    orderBy: { createdAt: 'desc'}

  })

  
  return (
    <div className=' w-full xl:px-20'>
      <div className=' flex justify-end mb-2 mr-2'><CreatePracticePopover/></div>
      <Table className='border-2 bg-white'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader className='bg-slate-100'>
    <TableRow>
      <TableHead className="w-[100px]">Session</TableHead>
      <TableHead>Date</TableHead>
      <TableHead >Section</TableHead>
      <TableHead >Topic</TableHead>
      <TableHead className="text-right">Review</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {data.map(i => <TableRow>
      <TableCell>{i.practiceSessionId}</TableCell>
      <TableCell>{i.createdAt.toString()}</TableCell>
      <TableCell>{section(i.section)}</TableCell>
      <TableCell>{topic(i.topic)}</TableCell>
      
      <TableCell className="text-right"><Link href={'/quiz/' + i.practiceSessionId+'/review'}>review</Link></TableCell>
      </TableRow>)}
  </TableBody>
</Table>

    </div>
  )
}

export default page