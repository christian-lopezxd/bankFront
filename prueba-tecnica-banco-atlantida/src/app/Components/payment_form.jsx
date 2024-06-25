import React from 'react'
import Link from 'next/link';


function PaymentForm() {
  return (
    <form className="w-1/2 flex flex-col gap-6 justify-center p-6 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Fecha de compra:</label>
        <input
        required
          type="date"
          name="purchase_date"
          max={new Date().toISOString().split('T')[0]}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Monto:</label>
        <input
        required
          type="number"
            step="0.01"
            min="0"
          name="amount"
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
  )
}

export default PaymentForm