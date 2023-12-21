'use client'

import { Button } from '@/components/ui/button'
import { question } from '@prisma/client'
import { redirect, useParams, usePathname, useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { db } from '@/lib/db'
import { recordPractice } from '@/actions/create-record'
import MyComponent from './MyComponent'
import topicFilter from '../../_components/topicFilter'
import sectionFilter from '../../_components/sectionFilter'
import { cn } from '@/lib/utils'
import clsx from 'clsx'
import topic from '../../_components/topicFilter'
import section from '../../_components/sectionFilter'




function QuizBody( { question }: {question:question[]} ) {
  
  interface recordProperties{
    psId: number;
    qId: number;
    isCorrect: boolean;
    choice: string;
    duration: number;
    topic: number;
  }
  const router = useRouter()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const[isCorrect, setIsCorrect] = useState(false)
    const [answered, setAnswered] = useState(false)
    const[choice, setChoice] = useState("")
    const length = question.length -1
    const pathname = usePathname()
    const params = useParams()
    const [record, setRecord]= useState<recordProperties[]>([])
    const practiceSession = Number(params.practiceSessionId)
    const [isPending, startTransition] = useTransition();
    const [done, setDone] = useState(false);
    const [ct, setCt] = useState(Date.now())
    
    
  


    const nextQuestion = async () =>{
      setCt(Date.now())
      
      if(currentQuestion < length){
        setAnswered(!answered)
        setChoice("")
        setCurrentQuestion(currentQuestion + 1)
        

      }
      if(currentQuestion === length){
        setAnswered(false)
        setDone(true)
        
       
        const promises = recordPractice(record)
        router.push(pathname+ '/review')
       
    
        
    
        
        
      }
      

    }
    const checkAnswer = () =>{
      let endTime = Date.now()
      let timeTaken = Math.round((endTime - ct)/1000)
      console.log(timeTaken)
     
      
      if (choice === question[currentQuestion].answer){
        setIsCorrect(true)
        const newRecord = [...record, {psId: practiceSession, qId: question[currentQuestion].id, isCorrect: true, duration: timeTaken, choice: choice, topic: question[currentQuestion].Topic}]
        setRecord(newRecord)

      }
      if (choice !== question[currentQuestion].answer){
        const newRecord = [...record, {psId: practiceSession, qId: question[currentQuestion].id, isCorrect: false, duration: timeTaken, choice: choice, topic: question[currentQuestion].Topic}]
        setRecord(newRecord)
        setIsCorrect(false)
      }
      console.log(isCorrect)
      
      console.log(record)
      setAnswered(true)
      
      
    }
    // if(done){
    //   router.push(pathname+ '/review')
    // }

  
 
  return (
    
    <>
    {/* <Button onClick={exitQuiz} disabled={!done} className={!done?'hidden':'block'}>Review</Button> */}
    {isPending?<div className='text-center'>loading...</div>:
    <div className='w-full h-full'>
      <Card className='w-full'>
  <CardHeader>
    <CardTitle className='text-center mb-5'><MyComponent paragraphs={question[currentQuestion].question}/></CardTitle>
    <CardDescription>Question ID:{question[currentQuestion].id}</CardDescription>
    <CardDescription>Question Topic: {topic(question[currentQuestion].Topic)}</CardDescription>
    <CardDescription>Question Section: {section(question[currentQuestion].Topic)}</CardDescription>
  </CardHeader>
  <CardContent>
    <div className= {clsx('border-2 border-black rounded-lg',{
      'border-indigo-500': choice === 'a' && !answered,
      'border-red-500': choice === 'a' && !isCorrect && answered,
      'border-green-600': choice === 'a' && isCorrect && answered,
      'border-green-500': question[currentQuestion].answer ==='a' && answered  })}>
    <button onClick={()=>{setChoice('a')}} className='bg-white w-full  p-2 rounded-md' value="a" disabled={answered}>{question[currentQuestion].a}</button>
    </div>
    
  </CardContent>
  <CardContent>
    <div className= {clsx('border-2 border-black rounded-lg',{
      'border-indigo-500': choice === 'b' && !answered,
      'border-red-500': choice === 'b' && !isCorrect && answered,
      'border-green-600': choice === 'b' && isCorrect && answered,
      'border-green-500': question[currentQuestion].answer ==='b' && answered  })}> 
    <button  onClick={()=>{setChoice('b')}} className='bg-white w-full  p-2 rounded-md' value = "b" disabled={answered}>{question[currentQuestion].b}</button>
    </div>
    
  </CardContent>
  <CardContent>
    <div className= {clsx('border-2 border-black rounded-lg',{
      'border-indigo-500': choice === 'c' && !answered,
      'border-red-500': choice === 'c' && !isCorrect && answered,
      'border-green-600': choice === 'c' && isCorrect && answered,
      'border-green-500': (question[currentQuestion].answer ==='c' && answered) })}>
    <button onClick={()=>{setChoice('c')}} className='bg-white w-full   p-2 rounded-md' value ='c' disabled={answered}>{question[currentQuestion].c}</button>
    </div>
    
  </CardContent>
  <CardContent>
    <div className= {clsx('border-2 border-black rounded-lg',{
      'border-indigo-500': choice === 'd' && !answered,
      'border-red-500': choice === 'd' && !isCorrect && answered,
      'border-green-600': choice === 'd' && isCorrect && answered,
      'border-green-500': question[currentQuestion].answer ==='d' && answered  })} >
    <button onClick={()=>{setChoice('d')}} className='bg-white w-full    p-2 rounded-md' value='d' disabled={answered}>{question[currentQuestion].d}</button>
    </div>
    
  </CardContent>
  <CardFooter className= {answered?'block':'hidden'}>
    <div className={isCorrect?'bg-green-100 p-5 rounded-lg' :'bg-red-100 p-5 mt-2 rounded-lg'}><MyComponent paragraphs={question[currentQuestion].explanation}/></div>
  </CardFooter>
  
</Card>


      
      <Button onClick={()=> startTransition(() => nextQuestion())} disabled={!answered}>{isPending ? 'Reecording answers' : 'next'}</Button>
      <Button onClick={checkAnswer } disabled={answered}>Submit</Button>
      </div>
  } 
      
    </>
  )
}



export default QuizBody
