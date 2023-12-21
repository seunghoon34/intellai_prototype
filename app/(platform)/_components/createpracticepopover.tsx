import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { Createpracticecard } from './createpracticecard'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



  
export const CreatePracticePopover = () => {
  return (
    <>
    <div className='bg-white p-2 border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-100'>
    {/* <Popover>
  <PopoverTrigger>Create new practice</PopoverTrigger>
  <PopoverContent><Createpracticecard/></PopoverContent>
</Popover> */}
<Dialog>
  <DialogTrigger>Create new practice</DialogTrigger>
  <DialogContent>
  <Createpracticecard/>
  </DialogContent>
</Dialog>

</div>



</>



  )
}
