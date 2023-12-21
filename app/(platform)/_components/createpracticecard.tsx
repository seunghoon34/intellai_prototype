'use client'
import { createPractice } from '@/actions/create-practice'
import { getQuizData } from '@/actions/get-quiz-question'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'
import React, { useState } from 'react'
import PracticeButton from './practieButton'
import { redirect } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const Createpracticecard = () => {
  const [selectedSection, setSelectedSection] = useState<string | undefined>("1");
  
  const handleSectionChange = (newValue: string | undefined) => {
    setSelectedSection(newValue);
    // Your custom logic here based on the new value
    
  };

  const [selectedTopic, setSelectedTopic] = useState<string | undefined>("4");
  
  const handleTopicChange = (newValue: string | undefined) => {
    setSelectedTopic(newValue);
    // Your custom logic here based on the new value
    
  };

  return (
    <div className='items-center justify-center'>
      <Card className='justify-center items-center border-0'>
  <CardHeader className='text-center'>
    <CardTitle>Practice</CardTitle>
    <CardDescription>Create Prctice Session</CardDescription>
  </CardHeader>
  <CardContent className='justify-center'>
  <Select  value={selectedSection}
      onValueChange={handleSectionChange}>
  <SelectTrigger className=" items-center">
    <SelectValue placeholder="Section" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Non Calculator</SelectItem>
    <SelectItem value="2">Calculator</SelectItem>
  </SelectContent>
</Select>

  </CardContent>
  <CardContent className='justify-center'>
  <Select value={selectedTopic}
      onValueChange={handleTopicChange}>
  <SelectTrigger className=" items-center">
    <SelectValue placeholder="Topic" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="4">All</SelectItem>
    <SelectItem value="1">Heart of Algebra</SelectItem>
    <SelectItem value="2">Problem Solving and Data analysis</SelectItem>
    <SelectItem value="3">Passport to Advanced Math</SelectItem>
  </SelectContent>
</Select>

  </CardContent>
  <CardFooter className='justify-center'>
  <PracticeButton section={Number(selectedSection)} topic={Number(selectedTopic)}/>
  
  </CardFooter>
</Card>

      
    </div>
  )
}
