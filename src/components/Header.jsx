'use client'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <main>
      <nav className='flex items-center bg-gray-950 text-white h-14'>
        {/* logo section */}
        <div className='w-1/5 flex justify-center'>
          <Link href={'/'}><h2>LOGO</h2></Link>
          
        </div>
        <ul className='w-3/5 flex justify-center gap-10'>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/about'}><li>Aobut</li></Link>
          <Link href={'/schedule'}><li>Schedule</li></Link>
          <Link href={'/today-task'}><li>Today-Task</li></Link>
          <Link href={'/contact'}><li>Contact</li></Link>
        </ul>
        <div className='w-1/5 flex justify-center'>
          <Link href={'/sign-in'}><button className='py-2 px-4 bg-green-400 '>Sign in</button></Link>
          
        </div>

      </nav>
    </main>
  )
}

export default Header