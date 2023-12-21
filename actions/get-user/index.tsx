import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";

export async function getUser(){
    const clerkUser = await currentUser()
    const user = await db.user.findFirst({
        where:{
            clerkId: clerkUser!.id
        }
    })
    return user
    
}