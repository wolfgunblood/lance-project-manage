import { Button } from '@/components/ui/button'
import Image from 'next/image'
import SignInButton from '@/components/SignInButton'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { getServerSession } from 'next-auth'
import { redirect } from "next/navigation";


export default async function Home() {

  const session = await getServerSession()
  console.log(session)

  if (session?.user) {
    redirect('/')
  }
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Card className='w-[300px]'>
        <CardHeader>
          <CardTitle>Welcome to FreenLance Manaagment Project 🔥!</CardTitle>
          <CardDescription>Manage your freelance projects easily with FreenLance Management Project 🔥!</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text='Sign in with Google' />
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>

    </div>
  )
}
