import React from 'react'
import Navbar from '../_components/navbar'
import Sidebar from '../_components/sidebar'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Navbar/>
    <main className=' pt-10 md:pt-16 px-0 w-screen
     h-full md:w-screen bg-white'>
         
        <div className='flex gap-x-7 h-full mt-0 w-screen'>
           
            <div className='h-full w-screen shrink  md:flex'>
                <div className='hidden h-screen md:block'><Sidebar/></div>
                <div className='px-3 flex w-screen pt-10 h-screen  justify-center lg:px-20 '>{children}</div>
                </div>
                
                
        </div>
        
    </main>
    </>
  )

}

export default layout