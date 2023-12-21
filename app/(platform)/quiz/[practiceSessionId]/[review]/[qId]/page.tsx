
import sectionFilter from '@/app/(platform)/_components/sectionFilter'
import topicFilter from '@/app/(platform)/_components/topicFilter'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { db } from '@/lib/db'
import questions from '@/lib/questions'
import clsx from 'clsx'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import MyComponent from '../../../_component/MyComponent'

const page = async ({ params }: {
    params: {practiceSessionId: number, qId: number}
  }) => {
    const record = await db.practiceQuestion.findFirst({
        where:{
            psId: Number(params.practiceSessionId),
            qId: Number(params.qId)
        }
    })
    // const question = await db.question.findFirst({
    //   where:{
    //         id: Number(params.qId)
    //   }
    // })
    const question = questions[Number(params.qId)-1];
    const choice = record!.choice
    const isCorrect = record!.isCorrect
    const answered = true
    function back(){
      redirect('/review')
    }
    
  
    return (
    <div className='h-full justify-center items-center w-full pb-10'>
      <Link className='mb-5 border-2 border-black' href={`/quiz/${params.practiceSessionId}/review`}>back</Link>
      <div className='flex w-full justify-center'>
      <Card className='w-full sm:w-4/6 xl:w-3/6 2xl:w-2/6'>
  <CardHeader>
    <CardTitle className='text-center mb-5'><MyComponent paragraphs={question.question}/></CardTitle>
    <CardDescription>Question ID:{question.id}</CardDescription>
    <CardDescription>Question Topic: {topicFilter(question.Topic)}</CardDescription>
    <CardDescription>Question Section: {sectionFilter(question.Topic)}</CardDescription>
  </CardHeader>
  <CardContent>
    <div className= {clsx('border-2 border-black rounded-lg',{
      'border-indigo-500': choice === 'a' && !answered,
      'border-red-500': choice === 'a' && !isCorrect && answered,
      'border-green-600': choice === 'a' && isCorrect && answered,
      'border-green-500': question.answer ==='a' && answered  })}>
    <button  className='bg-white w-full  p-2 rounded-md' value="a" disabled={answered}>{question.a}</button>
    </div>
    
  </CardContent>
  <CardContent>
    <div className= {clsx('border-2 border-black rounded-lg',{
      'border-indigo-500': choice === 'b' && !answered,
      'border-red-500': choice === 'b' && !isCorrect && answered,
      'border-green-600': choice === 'b' && isCorrect && answered,
      'border-green-500': question.answer ==='b' && answered  })}> 
    <button   className='bg-white w-full   p-2 rounded-md' value = "b" disabled={answered}>{question.b}</button>
    </div>
    
  </CardContent>
  <CardContent>
    <div className= {clsx('border-2 border-black rounded-lg',{
      'border-indigo-500': choice === 'c' && !answered,
      'border-red-500': choice === 'c' && !isCorrect && answered,
      'border-green-600': choice === 'c' && isCorrect && answered,
      'border-green-500': question.answer ==='c' && answered  })}>
    <button  className='bg-white w-full   p-2 rounded-md' value ='c' disabled={answered}>{question.c}</button>
    </div>
    
  </CardContent>
  <CardContent>
    <div className= {clsx('border-2 border-black rounded-lg',{
      'border-indigo-500': choice === 'd' && !answered,
      'border-red-500': choice === 'd' && !isCorrect && answered,
      'border-green-600': choice === 'd' && isCorrect && answered,
      'border-green-500': question.answer ==='d' && answered  })} >
    <button  className='bg-white w-full   p-2 rounded-md' value='d' disabled={answered}>{question.d}</button>
    </div>
    
  </CardContent>
  <CardFooter className= {answered?'block':'hidden'}>
    <div className={isCorrect?'bg-green-100 p-5 rounded-lg' :'bg-red-100 p-5 mt-2 rounded-lg'}><MyComponent paragraphs={question.explanation}/></div>
  </CardFooter>
</Card>
</div>
        
    </div>
    
  )
}

export default page