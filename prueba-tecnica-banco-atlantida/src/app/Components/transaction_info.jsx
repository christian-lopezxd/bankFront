import React from 'react'

function TransactionInfo(props) {

    const formatCardNumber = (cardNumber) => {
   if(cardNumber!==undefined){
    return cardNumber.replace(/(\d{4})\d{8}(\d{4})/, '$1 **** **** $2');
  };
  }
    return (
        <div className='w-11/12 flex flex-row justify-start'>
            <div className=''>
            <div className='flex flex-row gap-5 w-full justify-between'>
                <h1 className='font-bold'>Nombre del cliente:</h1>
                <h1> {props.firstName} {props.lastName} </h1>
            </div>
            <div className='flex flex-row gap-5 w-full justify-between'>
                <h1 className='font-bold'>Numero de tarjeta de credito:</h1>
                <h1>{formatCardNumber(props.cardNumber)}</h1>
            </div>
        </div>
        </div>
    )
}

export default TransactionInfo