import Link from 'next/link';
import React from 'react';

function PurchaseForm() {
  return (
    <form className="w-1/2 flex flex-col gap-6 justify-center p-6 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Fecha de compra:</label>
        <input
          type="date"
          name="purchase_date"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Descripción:</label>
        <input
          type="text"
          name="description"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-700">Monto:</label>
        <input
          type="number"
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
  );
}

export default PurchaseForm;
