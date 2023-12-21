'use server'
import { db } from "@/lib/db";


export async function createUser(userId: string){
    const newUser = await db.user.create({data: { clerkId: userId }})



}