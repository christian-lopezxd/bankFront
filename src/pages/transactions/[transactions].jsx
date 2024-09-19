'use client'
import React from 'react'
import '../../styles/globals.css';
import NavBar from '@/app/Components/navbar';
import TransactionsTable from '@/app/Components/transactions_table';
import TransactionInfo from '@/app/Components/transaction_info';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import CreditCardServices from '@/app/Services/credit_cards_services';

function Transactions() {

    const router = useRouter();
    const id = router.query.transactions;
  
    const [creditCard, setCreditCard] = useState([])
    
  
    useEffect(() => {
      if(id!=undefined){
        CreditCardServices.getOne(id).then((info) => {
          setCreditCard(info);
    
        });
      }
    }, [id]);

    

  
  
    return (
        <>
            <NavBar />
            <h1 className='font-bold  text-2xl pl-5 pt-5 '>Transacciones</h1>


            <section className="text-black flex flex-col gap-3 items-center pt-5 pl-10 pb-10">
                <TransactionInfo firstName={creditCard.firstName} lastName={creditCard.lastName} cardNumber={creditCard.cardNumber} />
                
                <TransactionsTable id={creditCard.id}/>
            </section>
        </>
    )
}

export default Transactions