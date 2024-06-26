import React, { useState, useEffect, useRef } from 'react';
import TransactionsServices from '../Services/transactions_services';
import Pagination from './page_selector';
import * as XLSX from 'xlsx';

function TransactionsTable(props) {
  const [transactions, setTransactions] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const tableRef = useRef(null);

  useEffect(() => {
    if (props.id !== undefined) {
      setIsLoading(true);
      TransactionsServices.getAll(props.id, pageNumber, totalCount).then((info) => {
        if (info && info.items) {
          setTransactions(info.items);
          setTotalPages(info.totalPages);
        }
        setIsLoading(false);
      });
    }
  }, [props.id, pageNumber, totalCount]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPageNumber(newPage);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const exportToExcel = () => {
    if (!transactions || transactions.length === 0) {
      console.error("No transactions to export");
      return;
    }

    const data = transactions.map(transaction => ({
      'Numero de autorización': transaction.id || 'N/A',
      'Fecha': formatDate(transaction.date) || 'N/A',
      'Descripción': transaction.description || 'N/A',
      'Tipo': transaction.type === 0 ? 'Cargo' : 'Abono',
      'Monto': parseFloat(transaction.amount).toFixed(2) || '0.00',
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
    XLSX.writeFile(wb, 'transactions.xlsx');
  };

  return (
    <>
      <div className="w-11/12 flex justify-between items-center mb-4">
        <select onChange={(e) => setTotalCount(e.target.value)} className="w-[10%] p-1">
          <option value="5" className="text-left">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <button
          onClick={exportToExcel}
          className="bg-green hover:bg-greenDark text-white px-4 py-2 rounded"
        >
          Exportar a Excel
        </button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 border-blue-500"></div>
        </div>
      ) : transactions.length > 0 ? (
        <div className="w-11/12 min-h-[300px]">
          <table ref={tableRef} className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="border w-[20%] pl-2">Numero de autorización</th>
                <th className="border pl-2">Fecha</th>
                <th className="border w-[50%] pl-2">Descripción</th>
                <th className="border w-[10%] pl-2">Tipo</th>
                <th className="border w-[10%] pl-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border p-2">{transaction.id}</td>
                  <td className="border p-2">{formatDate(transaction.date)}</td>
                  <td className="border p-2">{transaction.description}</td>
                  <td className="border p-2">{transaction.type === 0 ? 'Cargo' : 'Abono'}</td>
                  <td className="border p-2 text-right">${parseFloat(transaction.amount).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-4 text-gray-500">No hay ninguna transacción aún.</div>
      )}
      <Pagination
        currentPage={pageNumber}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default TransactionsTable;
