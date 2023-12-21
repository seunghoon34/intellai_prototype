
// import questions from "./questions";
// import { notesIndex } from "./pinecone";
// import { getEmbedding } from "./openai";

// async function getEmbeddingForQuestion(question: string, a:string, b:string,c:string,d:string,answer:string,explanation:string){
//     return getEmbedding(question + '\n\n' + a + '\n\n' + b + '\n\n' + c + '\n\n'+ d + '\n\n' + answer + '\n\n' + explanation)
// } 


// const pinconeQuestions =  questions.map(
//     async question =>  {
//         const embedding = await getEmbeddingForQuestion(question.question,question.a,question.b,question.c,question.d,question.answer,question.explanation)
//         await notesIndex.upsert([
//             {
//                 id: String(question.id),
//                 values: embedding
//             }
//         ])
//     }
//     )


