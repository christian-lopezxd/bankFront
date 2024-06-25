import React from 'react'
import '../../styles/globals.css';
import NavBar from '@/app/Components/navbar';
import TransactionInfo from '@/app/Components/transaction_info';
import PurchaseForm from '@/app/Components/purchase_form';

function Purchase() {
  return (
    <>
            <NavBar />
            <h1 className='font-bold  text-2xl pl-5 pt-5 '>Registro de compra</h1>
            <section className="text-black flex flex-col gap-3 items-center pt-5 pl-10">
                <TransactionInfo/>
                <PurchaseForm/>
                
            </section>
        </>
  )
}

export default Purchase