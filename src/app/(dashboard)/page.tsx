import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import Image from 'next/image'
import {redirect} from  "next/navigation"
import { getServerSession } from 'next-auth'

export default async function Dashboard() {
  
  const session = await getServerSession()

  console.log(session)
    
  if(!session?.user){
      redirect("/signup");
  }

  return (
    <div>
      Dashboard
    </div>
      
    )
}
