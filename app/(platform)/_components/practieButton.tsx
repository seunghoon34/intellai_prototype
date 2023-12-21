'use client'
import { createPractice } from '@/actions/create-practice';
import { Button } from '@/components/ui/button';
import { currentUser } from '@clerk/nextjs';
import React, { useTransition } from 'react'

function PracticeButton ({section, topic}:{section:number, topic:number}) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button onClick={()=> startTransition(() => createPractice({section:section,topic:topic}))}>
          {isPending ? 'creating practice' : 'Ceate practice'}
        </Button>
  )
}

export default PracticeButton