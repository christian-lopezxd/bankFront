import React from 'react'
import '../../styles/globals.css';
import NavBar from '@/app/Components/navbar';
import TransactionInfo from '@/app/Components/transaction_info';
import PurchaseForm from '@/app/Components/purchase_form';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import CreditCardServices from '@/app/Services/credit_cards_services';


function Purchase() {
  const router = useRouter();
  const id = router.query.purchase;

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
            <h1 className='font-bold  text-2xl pl-5 pt-5 '>Registro de compra</h1>
            <section className="text-black flex flex-col gap-3 items-center pt-5 pl-10">
            <TransactionInfo firstName={creditCard.firstName} lastName={creditCard.lastName} cardNumber={creditCard.cardNumber} />
            <PurchaseForm/>
                
            </section>
        </>
  )
}

export default Purchase