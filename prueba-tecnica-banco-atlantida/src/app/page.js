import CreditCardController from './Components/credit_card_controller'
import NavBar from './Components/navbar'


export default function Page() {
  return <section className="text-black flex flex-col gap-3">
    <NavBar />
   <div className='flex flex-col px-3 gap-5 items-center'>
   <h1 className='font-bold  text-2xl'>Listado de Tarjetas</h1>

   <table  className='w-11/12 table-auto text-left'>
   <thead>
    <tr >
      <th className='border w-1/5 pl-2'> Numero de tarjeta</th>
      <th className='border pl-2'> Nombres </th>
      <th className='border pl-2'> Apellido </th>
      <th className='border w-1/2 pl-2'> Opciones </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td className='border p-2'> 1234-1234-1234-1234 </td>
      <td className='border p-2'> Juan </td>
      <td className='border p-2'> Perez </td>
      <td className='border p-2'> <CreditCardController/> </td>
    </tr>
    <tr>
      <td className='border p-2'> 1234-1234-1234-1234 </td>
      <td className='border p-2'> Juan </td>
      <td className='border p-2'> Perez </td>
      <td className='border p-2'> <CreditCardController/> </td>
    </tr>
    <tr>
      <td className='border p-2'> 1234-1234-1234-1234 </td>
      <td className='border p-2'> Juan </td>
      <td className='border p-2'> Perez </td>
      <td className='border p-2'> <CreditCardController/> </td>
    </tr>
    </tbody>

   </table>
   </div>
  </section>
}