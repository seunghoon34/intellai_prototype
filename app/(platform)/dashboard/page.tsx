import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Navbar from '../_components/navbar'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { getUser } from '@/actions/get-user'
import { db } from '@/lib/db'
import { PieChart } from '../_components/piechart'
import BarChart from '../_components/BarChart'
import getUserProgress from '../_components/getUserProgress'
import RadarGraph from '../_components/radar'
import VerticalBarChart from '../_components/verticalBarChart'
import { Progress } from "@/components/ui/progress"





const page = async () => {
 
  let data = getUserProgress();
 
  
 
 
  return (
    
    <div className='w-full xl:h-full xl:items-stretch m-2 mb-20'>
        
        <div className='h-screen l xl:flex xl:flex-row xl:h-5/6 w-full mb-20'>
          <div className='h-full basis-full xl:basis-1/3 p-2'>
          <Card className='bg-white shadow-sm shadow-indigo-300  p-5 h-full w-full'>
            <CardTitle>Overall: </CardTitle>
            
           <div className='py-10 h-full w-full'><div className='h-2/4'><RadarGraph labels={['overall','section 3','section 4']} values={[(await data).overallScore,(await data).section1Score,(await data).section2Score]}/></div>
           <div className='h-2/4'> <VerticalBarChart labels={['Overall','Section 3', 'Section 4']} value1={[(await data).overallCorrectTime,(await data).section1CorrectTime,(await data).section2CorrectTime]}
            value2={[(await data).overallInorrectTime,(await data).section1IncorrectTime,(await data).section2IncorrectTime]}/> </div>
            </div>
            </Card>
          
          </div>
          <div className='h-screen xl:h-full basis-full xl:basis-2/3'>
          <div className='h-full xl:flex xl:flex-row xl:h-3/6 w-full'>
            <div className='h-full xl:flex w-full p-2'> <Card className='bg-white shadow-sm shadow-indigo-300  p-5 h-full w-full'>
            <CardTitle>Section 3(Non Calculator)</CardTitle>
            <div className='h-full xl:flex w-full'>
              <div className='h-3/6 w-full xl:h-full xl:w-3/6'> <VerticalBarChart labels={['Heart of Algebra','Problem Solving and Data Analysis','Passport To Advanced Math']} value1={[(await data).s1t1CorrectTime,(await data).s1t2CorrectTime,(await data).s1t3CorrectTime]}
            value2={[(await data).s1t1IncorrectTime,(await data).s1t2IncorrectTime,(await data).s1t3IncorrectTime]}/></div>
            <div className='h-3/6 w-full xl:h-full xl:w-3/6'><RadarGraph labels={['Heart of Algebra','Problem Solving and Data Analysis','Passport To Advanced Math']} values={[(await data).s1t1Score,(await data).s1t2Score,(await data).s1t3Score]}/></div>
              </div>
            </Card></div>
            
          </div>
          <div className='h-full xl:flex xl:flex-row xl:h-3/6 w-full'>
            <div className='h-full xl:flex w-full p-2'> <Card className='bg-white shadow-sm shadow-indigo-300  p-5 h-full w-full'>
            <CardTitle>Section 4(Calculator)</CardTitle>
            <div className='h-full xl:flex w-full'>
              <div className='h-3/6 w-full xl:h-full xl:w-3/6'> <VerticalBarChart labels={['Heart of Algebra','Problem Solving and Data Analysis','Passport To Advanced Math']} value1={[(await data).s2t1CorrectTime,(await data).s2t2CorrectTime,(await data).s2t3CorrectTime]}
            value2={[(await data).s1t1IncorrectTime,(await data).s2t2IncorrectTime,(await data).s2t3IncorrectTime]}/></div>
            <div className='h-3/6 w-full xl:h-full xl:w-3/6'><RadarGraph labels={['Heart of Algebra','Problem Solving and Data Analysis','Passport To Advanced Math']} values={[(await data).s2t1Score,(await data).s2t2Score,(await data).s2t3Score]}/></div>
              </div>
            </Card></div>
            
          </div>
          </div>
          
        
        </div>
        

    </div>
  )
}

export default page