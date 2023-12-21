'use server'
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPractice({section, topic}:{section:number, topic:number}) {
const currentuser = await currentUser();
  const clerkId = currentuser!.id
 
  

    
    const user = await db.user.findFirst({
        where:{
            clerkId: clerkId
        }
    }) 
    const newPracticeSession =  await db.practiceSession.create({
        data:{
            userId: user!.id,
            section: section,
            topic: topic
        }
    })

    redirect(`/quiz/${newPracticeSession.practiceSessionId}`)
    
    
    
    
}