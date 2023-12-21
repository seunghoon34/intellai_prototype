'use Server'
import { createPractice } from '@/actions/create-practice'
import { redirect } from 'next/navigation'
import React from 'react'

const gotopractice = async () => {
    const practice = await createPractice()
    redirect('/quiz')
  
}

export default gotopractice