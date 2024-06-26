'use client'
import NavBar from '@/app/Components/navbar'
import React from 'react'
import '../../styles/globals.css';
import CreditCardForm from '@/app/Components/card_form';
import { ToastContainer } from 'react-toastify';




export default function Account() {
  


  return (
   <>
    <NavBar />
    <h1  className='font-bold  text-2xl pl-5 pt-5 '>Estado de cuenta</h1>
    <section className="text-black flex flex-col gap-3 items-center pt-5 pb-5">
    <ToastContainer />
    <CreditCardForm/>
    </section>
   </>
  )
}
