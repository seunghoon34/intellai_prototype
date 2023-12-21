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
import { db } from '@/lib/db'
import Link from 'next/link'
import topic from '@/app/(platform)/_components/topicFilter'


const page = async ({ params }: {
  params: {practiceSessionId: number}
}) => {

  function findSum(myNums:number[]){
    let sum = 0
    myNums.forEach( num => {
      sum += num;
    })
    return sum;
  }
    
    
  
  const data =  await db.practiceQuestion.findMany({
    where: {psId: Number(params.practiceSessionId)}
  })
const correct = data.filter((performance) =>
  {return performance.isCorrect === true}).length

  const incorrect = data.filter((performance) =>
  {return performance.isCorrect === false}).length

  const performance = (correct*100/(correct+ incorrect))



  const correctTime:number[] = []
  const incorrectTime:number[] = []
  data.filter(performance => {if(performance.isCorrect === true){
    correctTime.push(performance.duration);}
    else{
      incorrectTime.push(performance.duration)
    }

  })


const correctSum = findSum(correctTime)
const incorrectSum = findSum(incorrectTime)

const avgCorrect = Math.round((correctSum/correctTime.length))
const avgIncorrect = Math.round((incorrectSum/incorrectTime.length))




  
return (
    <div className='h-screen flex justify-center  w-screen'>
      
      
      <div className='w-full px-10 xl:px-0 xl:w-8/12 2xl:w-6/12 mt-20'>
      <div className='flex flex-row border-2'>
      <div className='basis-1/4'>Score:{performance}%</div>
      <div className='basis-3/4'>
      <h1>AVG Correct:{avgCorrect} seconds</h1>
      <h1>AVG Incorrect:{avgIncorrect} seconds</h1>
      </div>
      
      </div>
      <Table className='border-2 justify-between'>
  <TableCaption>A list of your Questions.</TableCaption>
  <TableHeader className='bg-slate-100'>
    <TableRow>
      <TableHead className="w-[100px]">Question ID</TableHead>
      <TableHead>Topic</TableHead>
      <TableHead>Method</TableHead>
      <TableHead >Time</TableHead>
      <TableHead>Review</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    
      {data.map(i => <TableRow key={i.qId}>
        <TableCell className="font-medium">{i.qId}</TableCell>
      <TableCell>{topic(i.topic)}</TableCell>
      <TableCell>{i.isCorrect?'Correct':'Incorrect'}</TableCell>
      <TableCell >{i.duration} seconds</TableCell>
      <TableCell ><Link href={'./review/' + i.qId}>review</Link></TableCell>
      </TableRow>)}
      
    
  </TableBody>
</Table>

      </div>
      
      </div>
  )
}

export default page