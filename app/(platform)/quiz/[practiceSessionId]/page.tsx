'use server'

import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import React, { useState } from 'react'
import QuizBody from '../_component/quizbody'
import { getQuizData } from '@/actions/get-quiz-question'
import questions from '@/lib/questions'
import Script from 'next/script'
import { question } from '@prisma/client'

  

const page =  async ({ params }: {
    params: {practiceSessionId: String}
}) => {
    const  data  = await db.practiceSession.findFirst({
        where:{
            practiceSessionId: Number(params.practiceSessionId)
        }
    }
    );

    

    const section = data?.section
    const topic = data?.topic
    if(topic ===4){
        var question = questions.filter(x => x.section === section)
    }else{
        var question = questions.filter(x => x.section === section && x.Topic === topic)
    }
    
   
    

    return (
        <div className='h-full flex justify-center items-center w-full pb-10'>
            <div className='w-full sm:w-4/6 xl:w-3/6 2xl:w-2/6'>
            <QuizBody question={question} />
            </div>
            </div>
    )
    };
  

export default page