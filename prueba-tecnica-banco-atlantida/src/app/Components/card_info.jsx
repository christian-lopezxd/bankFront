import React from 'react'

function CardInfo() {
  return (
    
       
      <div className='flex flex-row w-[80vw] justify-start gap-[20vw]'>
      <div className='w-1/2'>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Nombre del cliente:</h1>
        <h1>Christian Lopez</h1>
      </div>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Numero de tarjeta de credito:</h1>
        <h1>1111 1122 0000 2020</h1>
      </div>
      </div>


      <div className='w-1/2'>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Saldo Actual:</h1>
        <h1>$200.00</h1>
      </div>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Limite:</h1>
        <h1>$2000.00</h1>
      </div>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Interés bonificable:</h1>
        <h1>$1.60</h1>
      </div>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Saldo disponible:</h1>
        <h1>$1875.00</h1>
      </div>
      </div>
      </div>
    
  )
}

export default CardInfo