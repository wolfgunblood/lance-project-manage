import React from 'react'
import {redirect} from  "next/navigation"
import { getServerSession } from 'next-auth'

type Props = {}

const InvoicePage = async (props: Props) => {
  const session = await getServerSession()

  console.log(session)
    
  if(!session?.user){
      redirect("/signup");
  }

  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-slate-50'>
        Helllo World
    </div>
  )
}

export default InvoicePage