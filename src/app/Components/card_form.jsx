'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreditCardServices from '@/app/Services/credit_cards_services';

function CreditCardForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [currentBalance, setCurrentBalance] = useState('');
  const [creditLimit, setCreditLimit] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [minimumPaymentPercentage, setMinimumPaymentPercentage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await CreditCardServices.Create(
        firstName,
        lastName,
        cardNumber,
        currentBalance,
        creditLimit,
        interestRate,
        minimumPaymentPercentage,
      );
      if (response) {
       
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        toast.error('Error al crear la tarjeta de crédito');
      }
    } catch (error) {
      toast.error('Error al crear la tarjeta de crédito');
     
    }
  };

  return (
    <form className="w-1/2 flex flex-col gap-6 justify-center p-6 bg-white rounded-lg shadow-xl" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Nombre:</label>
          <input
            required
            value={firstName}
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Apellido:</label>
          <input
            required
            value={lastName}
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Número de Tarjeta:</label>
          <input
            required
            value={cardNumber}
            type="text"
            name="cardNumber"
            onChange={(e) => setCardNumber(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Saldo Actual:</label>
          <input
            required
            value={currentBalance}
            type="number"
            step="0.01"
            min="0"
            name="currentBalance"
            onChange={(e) => setCurrentBalance(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Límite de Crédito:</label>
          <input
            required
            value={creditLimit}
            type="number"
            step="0.01"
            min="0"
            name="creditLimit"
            onChange={(e) => setCreditLimit(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Tasa de Interés:</label>
          <input
            required
            value={interestRate}
            type="number"
            step="0.01"
            min="0"
            name="interestRate"
            onChange={(e) => setInterestRate(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Porcentaje de Pago Mínimo:</label>
          <input
            required
            value={minimumPaymentPercentage}
            type="number"
            step="0.01"
            min="0"
            name="minimumPaymentPercentage"
            onChange={(e) => setMinimumPaymentPercentage(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4 mt-4">
        <button
          type="submit"
          className="bg-tertiary hover:bg-tertiaryDark py-2 px-4 rounded-md font-montserrat text-white"
        >
          Registrar Tarjeta
        </button>
        <Link href="/">
          <button className="bg-primary hover:bg-primaryDark py-2 px-4 rounded-md font-montserrat text-white">
            Cancelar
          </button>
        </Link>
      </div>
    </form>
  );
}

export default CreditCardForm;
