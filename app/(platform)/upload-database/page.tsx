import questions from "@/lib/questions";
import { notesIndex } from "@/lib/pinecone";
import { getEmbedding } from "@/lib/openai";

import React from 'react'

const page = () => {
    // async function getEmbeddingForQuestion(id: string, question: string, a:string, b:string,c:string,d:string,answer:string,explanation:string){
    //     return getEmbedding('questin id:'+ id+ '\n\n' + 'question:'+ question + '\n\n' +"option a:" + a + '\n\n' + "option b:" + b + '\n\n' + "option c:" + c + '\n\n'+ "option d:" + d + '\n\n' +"answer:" + answer + '\n\n' + "explanation" +explanation)
    // } 
    
    
    // const pinconeQuestions =  questions.map(
    //     async question =>  {
    //         const embedding = await getEmbeddingForQuestion(String(question.id),question.question,question.a,question.b,question.c,question.d,question.answer,question.explanation)
    //         await notesIndex.upsert([
    //             {
    //                 id: String(question.id),
    //                 values: embedding
    //             }
    //         ])
    //     }
    //     )
    //     console.log(pinconeQuestions)
  return (
    <div>page</div>
  )
}

export default page