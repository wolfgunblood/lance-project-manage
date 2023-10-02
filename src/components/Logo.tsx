import Image from 'next/image'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Image 
        src="/logo.svg"
        alt='logo'
        height={140}
        width={140}
    />
  )
}

export default Logo