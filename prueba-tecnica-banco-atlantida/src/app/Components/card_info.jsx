import React from 'react'

function CardInfo(props) {


  const formatCardNumber = (cardNumber) => {
   if(cardNumber!==undefined){
    return cardNumber.replace(/(\d{4})\d{8}(\d{4})/, '$1 **** **** $2');
  };
  }
  
  
  return (
    
       
      <div className='flex flex-row w-[80vw] justify-start gap-[20vw]'>
      <div className='w-1/2'>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Nombre del cliente:</h1>
        <h1>{props.firstName} {props.lastName}</h1>
      </div>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Numero de tarjeta de credito:</h1>
        <h1>{formatCardNumber(props.cardNumber)}</h1>
      </div>
      </div>


      <div className='w-1/2'>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Saldo Actual:</h1>
        <h1>${parseFloat(props.currentBalance).toFixed(2)}</h1>
      </div>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Limite:</h1>
        <h1>${parseFloat(props.creditLimit).toFixed(2)} </h1>
      </div>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Interés bonificable:</h1>
        <h1>${parseFloat(props.bonusInterest).toFixed(2)}</h1>
      </div>
      <div className='flex flex-row gap-5 w-full justify-between'>
        <h1 className='font-bold'>Saldo disponible:</h1>
        <h1>${parseFloat(props.availableBalance).toFixed(2)}</h1>
      </div>
      </div>
      </div>
    
  )
}

export default CardInfo