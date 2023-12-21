import openai, { getEmbedding } from "@/lib/openai";
import { notesIndex } from "@/lib/pinecone";
import { ChatCompletionMessage} from "openai/resources/index.mjs";
import questions from "@/lib/questions";
import { OpenAIStream, StreamingTextResponse } from "ai";
import getUserProgress from "../../_components/getUserProgress";


export async function POST(req: Request){
    try {
        
        const body = await req.json();
        const messages: ChatCompletionMessage[] = body.messages;

        

        const messagesTruncated = messages.slice(-6);

        // const embedding = await getEmbedding(messagesTruncated.map((message)=> message.content).join('\n'));

        // const systemMessages: ChatCompletionMessage = {
        //     role: "system",
        //     content: "You are an intelligent SAT test prep. You answer the user's question based on the SAT exanms and the test prep question set" +
        //     "The test prep question set is: \n"+
        //     questions.map((question)=>  'questin id:'+ question.id+ '\n' + 'question:'+ question.question + '\n' +"option a:" + question.a + '\n' + "option b:" + question.b + '\n' + "option c:" + question.c + '\n'+ "option d:" + question.d + '\n' +"answer:" + question.answer + '\n' + "explanation" +question.explanation).join('\n\n')
            


        // }

        const userProgress = await getUserProgress()

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo-1106",
            stream: true,
            messages: [{"role": "system",
            "content": "You are an intelligent SAT test prep. You answer the user's question based on the SAT exanms and the test prep question set, only answer questions related to the sat exam. You should refuse to answer any questions unrelated to the SAT exam and practice questions sets and the users current progerss" +
            "The curremt user progress is: \n"+`Overall Score(accuracy in %): ${userProgress.overallScore}, overall average time for correct answers(seconds): ${userProgress.overallCorrectTime}, incorrect time(seconds): ${userProgress.overallInorrectTime} `+
            `For section 3 (non calculator) the overall score is ${userProgress.section1Score} the average correct time: ${userProgress.section1CorrectTime}, incorrect:${userProgress.section1IncorrectTime}`+
            `For the first subtopic(Heart of Algebra) of section 3, score:${userProgress.s1t1Score}, correct time:${userProgress.s1t1CorrectTime}, incorrect time:${userProgress.s1t1IncorrectTime}`+
            `For the second subtopic(Problem Solving and Data Analysis) of section 3, score:${userProgress.s1t2Score}, correct time:${userProgress.s1t2CorrectTime}, incorrect time:${userProgress.s1t2IncorrectTime}`+
            `For the third subtopic(Passport To Advanced Math) of section 3, score:${userProgress.s1t3Score}, correct time:${userProgress.s1t3CorrectTime}, incorrect time:${userProgress.s1t3IncorrectTime}`+
            `For section 4 (calculator) the overall score is ${userProgress.section2Score} the average correct time: ${userProgress.section2CorrectTime}, incorrect:${userProgress.section2IncorrectTime}`+
            `For the first subtopic(Heart of Algebra) of section 4, score:${userProgress.s2t1Score}, correct time:${userProgress.s2t1CorrectTime}, incorrect time:${userProgress.s2t1IncorrectTime}`+
            `For the second subtopic(Problem Solving and Data Analysis) of section 4, score:${userProgress.s2t2Score}, correct time:${userProgress.s2t2CorrectTime}, incorrect time:${userProgress.s2t2IncorrectTime}`+
            `For the third subtopic(Passport To Advanced Math) of section 4, score:${userProgress.s2t3Score}, correct time:${userProgress.s2t3CorrectTime}, incorrect time:${userProgress.s2t3IncorrectTime}`+

            "The test prep question set is: \n"+
            questions.map((question)=>  'questin id:'+ question.id+ '\n' + 'question:'+ question.question + '\n' +"option a:" + question.a + '\n' + "option b:" + question.b + '\n' + "option c:" + question.c + '\n'+ "option d:" + question.d + '\n' +"answer:" + question.answer + '\n' + "explanation" +question.explanation).join('\n\n')},
        ...messagesTruncated]
            
        })

        const stream = OpenAIStream(response);
        return new StreamingTextResponse(stream);
        

        
        


    } catch (error) {
        console.log(error);
        return Response.json({ error: "Internal server error"}, {status: 500})

        
    }

}

