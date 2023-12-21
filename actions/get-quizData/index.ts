'use server'

import { db } from "@/lib/db";

export async function getQuizData(){
    try {
        
        const  quizData  = await db.question.findMany()
        return  {props: { questions: quizData}}
    } catch (error) {
        return { error}
        
    }
     
}
