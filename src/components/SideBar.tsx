import React from 'react'
import Logo from './Logo'
import SideBarRoutes from './SideBarRoutes'
import UserAccount from './UserAccount'
import { getServerSession } from 'next-auth'



type Props = {}

const SideBar = async (props: Props) => {

  const session = await getServerSession()
  console.log(session?.user)

  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white-50 shadow-sm'>
      <div className='p-6'>
        <Logo />
      </div>
      <div className='flex flex-col w-full'>
        <SideBarRoutes />
      </div>
      <div className='mt-auto p-6'>
        {session &&
          <UserAccount user={session?.user} />
        }
      </div>
    </div>
  )
}

export default SideBar