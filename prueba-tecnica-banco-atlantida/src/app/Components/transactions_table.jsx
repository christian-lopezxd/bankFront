import React from 'react'

function TransactionsTable() {
  return (
    <table  className='w-11/12 table-auto text-left'>
   <thead>
    <tr >
      <th className='border w-[20%] pl-2'> Numero de autorizacion</th>
      <th className='border pl-2'> Fecha </th>
      <th className='border w-[50%] pl-2'> Descripción </th>
      <th className='border  w-[10%] pl-2'> Tipo </th>
      <th className='border w-[10%] pl-2'> Monto </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td className='border p-2'> 1234-1234-1234-1234 </td>
      <td className='border p-2'> Juan </td>
      <td className='border p-2'> Perez </td>
      <td className='border p-2'> </td>
      <td className='border p-2'> </td>
    </tr>
    <tr>
      <td className='border p-2'> 1234-1234-1234-1234 </td>
      <td className='border p-2'> Juan </td>
      <td className='border p-2'> Perez </td>
      <td className='border p-2'>  </td>
      <td className='border p-2'>  </td>
    </tr>
    <tr>
      <td className='border p-2'> 1234-1234-1234-1234 </td>
      <td className='border p-2'> Juan </td>
      <td className='border p-2'> Perez </td>
      <td className='border p-2'> </td>
      <td className='border p-2'> </td>
    </tr>
    </tbody>

   </table>
  )
}

export default TransactionsTable