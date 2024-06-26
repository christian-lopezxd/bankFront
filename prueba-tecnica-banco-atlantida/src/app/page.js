'use client';
import React, { useState, useEffect } from 'react';
import CreditCardController from './Components/credit_card_controller';
import NavBar from './Components/navbar';
import CreditCardServices from './Services/credit_cards_services';
import Pagination from './Components/page_selector';
import Link from 'next/link';

export default function Page() {
  const [creditCards, setCreditCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(5);
  const [search, setSearch] = useState('');

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPageNumber(1); // Reset page number to 1 when search changes
  };

  useEffect(() => {
    setIsLoading(true);
    CreditCardServices.getAll(pageNumber, totalCount, search).then((info) => {
      setCreditCards(info);
      setTotalPages(info.totalPages);
      setIsLoading(false);
    });
  }, [pageNumber, totalCount, search]);

  const formatCardNumber = (cardNumber) => {
    return cardNumber.replace(/(\d{4})\d{8}(\d{4})/, '$1 **** **** $2');
  };

  return (
    <section className="text-black flex flex-col gap-3">
      <NavBar />
      <div className="flex flex-col px-3 gap-5 items-center">
        <h1 className="font-bold text-2xl">Listado de Tarjetas</h1>
        <div className="w-11/12 flex justify-between items-center">
          <input 
            type="text"
            placeholder="Buscar tarjeta"
            value={search}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md hover:rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-1/2"
          />
        <div className='w-[50%] flex flex-row justify-end gap-2'>
        <select 
            onChange={(e) => setTotalCount(e.target.value)} 
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-[20%]"
          >
            <option value="5" className="text-left">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="1000">Todos</option>
          </select>
          <Link href='/credit-card/create'>
          <button
          className="bg-primary hover:bg-primaryDark text-white px-2 py-2 rounded"
        >
          Crear tarjeta de credito
        </button>
          
          </Link>

        </div>
        
        </div>

        <div className="w-11/12 min-h-[400px]">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 border-blue-500"></div>
            </div>
          ) : (
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  <th className="border w-1/5 pl-2">Numero de tarjeta</th>
                  <th className="border pl-2">Nombres</th>
                  <th className="border pl-2">Apellido</th>
                  <th className="border w-1/2 pl-2">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {creditCards.data.length > 0 ? (
                  creditCards.data.map((creditCard) => {
                    const { id, firstName, lastName, cardNumber } = creditCard;
                    return (
                      <tr key={id}>
                        <td className="border p-2">{formatCardNumber(cardNumber)}</td>
                        <td className="border p-2">{firstName}</td>
                        <td className="border p-2">{lastName}</td>
                        <td className="border p-2">
                          <CreditCardController id={id} />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="border p-2 text-center">
                      No hay ninguna tarjeta aún.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
