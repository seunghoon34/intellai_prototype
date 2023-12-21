'use server'
import { createPractice } from '@/actions/create-practice'
import { getQuizData } from '@/actions/get-quiz-question'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import PracticeButton from '../../_components/practieButton'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Createpracticecard } from '../../_components/createpracticecard'


const page =  () => {
  
  
  return (
    <Card className='justify-center items-center border-2 border-indigo-500 h-72 w-full md:w-4/6 xl:w-96'>
      <Createpracticecard/>
    </Card>
    
    
  )
}

export default page