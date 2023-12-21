import { db } from "@/lib/db";


export async function getQuizData(){
    const quizData = db.question.findMany()

}