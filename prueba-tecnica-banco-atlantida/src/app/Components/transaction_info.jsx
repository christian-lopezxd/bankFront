import React from 'react'

function TransactionInfo() {
    return (
        <div className='w-11/12 flex flex-row justify-start'>
            <div className=''>
            <div className='flex flex-row gap-5 w-full justify-between'>
                <h1 className='font-bold'>Nombre del cliente:</h1>
                <h1>Christian Lopez</h1>
            </div>
            <div className='flex flex-row gap-5 w-full justify-between'>
                <h1 className='font-bold'>Numero de tarjeta de credito:</h1>
                <h1>1111 1122 0000 2020</h1>
            </div>
        </div>
        </div>
    )
}

export default TransactionInfo