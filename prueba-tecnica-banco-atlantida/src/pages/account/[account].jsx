import NavBar from '@/app/Components/navbar'
import React from 'react'
import '../../styles/globals.css';

export default function Account(props) {
  return (
   <>
    <NavBar />
    <section className="text-black flex flex-col gap-3 pl-4 pt-3">
     
      <h1  className='font-bold  text-2xl'>Estado de cuenta</h1>
      <div className='flex flex-col'>
        <h1>Nombre del cliente</h1>
        <h1>Christian Lopez</h1>
      </div>
    </section>
   </>
  )
}
