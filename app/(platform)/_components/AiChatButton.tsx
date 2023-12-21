'use client'
import { useState } from "react";
import AiChatBox from "./AiChatBox";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export default function AiChatButton(){
    const [chatBoxOpen, setChatBoxOpen] = useState(false);

    return(
        <>
        <Button onClick={()=>setChatBoxOpen(true)}>
            <Bot size={20} className="mr-2"/>
            Ai Chat
        </Button>
        <AiChatBox open = {chatBoxOpen} onClose={()=> setChatBoxOpen(false)}/>
        </>
    )
}