import Link from 'next/link'
import React from 'react'


function NavBar() {
  return (
    <div className='w-full bg-primary h-[10vh] flex flex-row items-center'>
        <Link href={`/`}><img src='/logo.png' className='max-h-[10vh]' /></Link>
        
    </div>
  )
}

export default NavBar