"use client"
import { Book, History, Layout, TvIcon } from "lucide-react"
import Link from "next/link"


interface SidebarProps{
    storageKey?: String
}

const Sidebar = ({ storageKey}: SidebarProps) => {
  return (
    <div className="h-full bg-indigo-200 rounded-lg text-black"> 
    <div className="px-5 pt-5">
    <div className="mt-2 mb-2  py-3 flex">
      <Layout className="mr-2"/>
    <Link href="/dashboard">DashBoard</Link>
    </div>
    <div className="mt-2 mb-2  py-3 flex">
      <Book className="mr-2"/>
    <Link href="/dashboard/practice">Practice</Link>
    </div>
    <div className="mt-2 mb-2  py-3 flex">
      <History className="mr-2"/>
    <Link href="/dashboard/review">Review</Link>
    </div>
    </div>
   
    
    </div>
  )
}

export default Sidebar