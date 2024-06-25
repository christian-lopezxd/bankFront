import NavBar from '@/app/Components/navbar'
import React from 'react'
import '../../styles/globals.css';
import CardInfo from '@/app/Components/card_info';
import CardTable from '@/app/Components/card_table';

export default function Account() {
  return (
   <>
    <NavBar />
    <h1  className='font-bold  text-2xl pl-5 pt-5 '>Estado de cuenta</h1>
    <section className="text-black flex flex-col gap-3 items-center pt-5">
  
    <CardInfo/>
    <CardTable/>
    <div className='w-full flex flex-col items-start pl-[3.7rem]'>
    <h2>Total de compras en Junio: </h2>
    <h2>Total de compras en Mayo: </h2>
    </div>

      


    </section>
   </>
  )
}
