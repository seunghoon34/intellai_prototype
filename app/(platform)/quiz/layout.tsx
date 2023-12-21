import React from 'react'
import Navbar from '../_components/navbar'

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
        <Navbar/>
        <main className='justify-center'>
        <div className='flex-none my-20 mx-5 h-full w-2xlitems-center justify-center bg-slate' >
        <div className=' flex h-full w-full items-center justify-center'>{children}</div>
        </div>
        </main>
        
        </>
    )
}

export default layout