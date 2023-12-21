import { Medal } from 'lucide-react'
import React from 'react'

const MarketingPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <div className='flex items-center justify-center flex-col'>
            <div>
                <Medal className= "hh-6 w-6 mr-2"/>
                No 1 task management
            </div>
            
<a href="/sign-up" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">sign up</a>
<a href="/sign-in" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">sign in</a>

        </div>
    </div>
  )
}

export default MarketingPage