"use client"
import React from 'react'
import { redirect } from "next/navigation"
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { User } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"




type Props = {
    user: Pick<User, "name" | "image" | "email">
};


const UserAccount = ({ user }: Props) => {

    return (
        <div>
            <Avatar>
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <h2>{user.name}</h2>
            <p>{user.email}</p>

            <button onClick={(event: any) => {
                event.preventDefault();
                signOut().catch(console.error)
            }}>

                <LogOut className='ml-2 w-4 h-4' />
            </button>
        </div>
    )
}

export default UserAccount