'use server'

import { db } from "@/lib/db"

interface dataProperties{
    psId: number;
    qId: number;
    isCorrect: boolean;
    choice: string;
    duration: number;
    topic: number;
  }

// export async function recordPractice({psId, qId, isCorrect, duration, choice, Topic} : {psId:number, qId:number, isCorrect:boolean, duration:number, choice:string, Topic: number}){
//     const record = await db.practiceQuestion.create({
//         data: 
//             {psId: psId, qId:qId, isCorrect: isCorrect, duration: duration, choice: choice, topic: Topic}

        
//     })

// }

export async function recordPractice(data :dataProperties[]){
    const record = await db.practiceQuestion.createMany({
        data: data
            

        
    })

}