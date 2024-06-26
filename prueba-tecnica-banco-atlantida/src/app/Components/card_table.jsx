import React, { useState, useEffect } from 'react';
import PurchasesServices from '../Services/purchases_services';
import Pagination from './page_selector';
import * as XLSX from 'xlsx';

function CardTable(props) {
  const [purchases, setPurchases] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.id !== undefined) {
      setIsLoading(true);
      PurchasesServices.getAll(props.id, pageNumber, totalCount).then((info) => {
        setPurchases(info.data);
        setTotalPages(info.totalPages);
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
    if (!purchases || purchases.length === 0) {
      console.error("No purchases to export");
      return;
    }

    const data = purchases.map(purchase => ({
      'Numero de autorización': purchase.id || 'N/A',
      'Fecha': formatDate(purchase.date) || 'N/A',
      'Descripción': purchase.description || 'N/A',
      'Monto': parseFloat(purchase.amount).toFixed(2) || '0.00',
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Compras');
    XLSX.writeFile(wb, 'compras.xlsx');
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
      <div className="w-11/12 min-h-[250px]">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 border-blue-500"></div>
          </div>
        ) : purchases.length > 0 ? (
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="border pl-2">Numero de autorización</th>
                <th className="border pl-2">Fecha</th>
                <th className="border w-1/2 pl-2">Descripción</th>
                <th className="border pl-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase) => {
                const { id, date, description, amount } = purchase;

                return (
                  <tr key={id}>
                    <td className="border p-2">{id}</td>
                    <td className="border p-2">{formatDate(date)}</td>
                    <td className="border p-2">{description}</td>
                    <td className="border p-2 text-right">${parseFloat(amount).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-2xl mt-4 text-gray-500">No hay ninguna compra aún.</div>
        )}
      </div>
      <Pagination
        currentPage={pageNumber}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default CardTable;
