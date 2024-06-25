import NavBar from '@/app/Components/navbar'
import React from 'react'
import '../../styles/globals.css';
import TransactionInfo from '@/app/Components/transaction_info';
import PaymentForm from '@/app/Components/payment_form';

export default function Id() {
  return (
    <>
    <NavBar />
    <h1 className='font-bold  text-2xl pl-5 pt-5 '>Registro de pago</h1>
    <section className="text-black flex flex-col gap-3 items-center pt-5 pl-10">
        <TransactionInfo/>
        <PaymentForm/>
        
        
    </section>
</>
  )
}
