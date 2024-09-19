'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PurchasesServices from '../Services/purchases_services';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PurchaseForm() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const router = useRouter();
  const id = router.query.purchase;

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (id !== undefined) {
      try {
        const response = await PurchasesServices.Create(id, date, description, amount);
        console.log(response);
        if (response) {
          setTimeout(() => {
            router.push('/');
          }, 2000);
        } else {
        
        }
      } catch (error) {
        console.error('Error creating purchase:', error);
       
      }
    }
  };

  return (
    <><ToastContainer />
    <form className="w-1/2 flex flex-col gap-6 justify-center p-6 bg-white rounded-lg shadow-xl" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Fecha de compra:</label>
        <input
          required
          value={date}
          type="date"
          name="purchase_date"
          max={new Date().toISOString().split('T')[0]}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Descripción:</label>
        <input
          required
          value={description}
          type="text"
          name="description"
          minLength={10}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Monto:</label>
        <input
          required
          value={amount}
          type="number"
          step="0.01"
          min="0"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex flex-row justify-center gap-4 mt-4">
        <button
          type="submit"
          className="bg-tertiary hover:bg-tertiaryDark py-2 px-4 rounded-md font-montserrat text-white"
        >
          Registrar compra
        </button>
        <Link href="/">
          <button className="bg-primary hover:bg-primaryDark py-2 px-4 rounded-md font-montserrat text-white">
            Cancelar
          </button>
        </Link>
      </div>
    </form>
    </>
  );
}

export default PurchaseForm;
