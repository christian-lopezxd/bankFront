'use client'
import NavBar from '@/app/Components/navbar'
import React from 'react'
import '../../styles/globals.css';
import { useState, useEffect } from 'react'
import CardInfo from '@/app/Components/card_info';
import CardTable from '@/app/Components/card_table';
import CreditCardServices from '@/app/Services/credit_cards_services';
import { useRouter } from 'next/router';



export default function Account() {
  
  const router = useRouter();
  const id = router.query.account;

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
    <h1  className='font-bold  text-2xl pl-5 pt-5 '>Estado de cuenta</h1>
    <section className="text-black flex flex-col gap-3 items-center pt-5 pb-5">
  
    <CardInfo firstName={creditCard.firstName} lastName={creditCard.lastName} cardNumber={creditCard.cardNumber} currentBalance={creditCard.currentBalance}  creditLimit={creditCard.creditLimit} bonusInterest={creditCard.bonusInterest} availableBalance={creditCard.availableBalance} />
    <CardTable id={creditCard.id}/>
    <div className='w-full flex flex-col items-start pl-[3.7rem]'>
    <h2>Total de compras en Junio: ${creditCard.totalPurchasesThisMonth}</h2>
    <h2>Total de compras en Mayo: ${creditCard.totalPurchasesLastMonth}</h2>
    </div>

      


    </section>
   </>
  )
}
