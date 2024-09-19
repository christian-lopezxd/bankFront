import React from 'react'
import Link from 'next/link'

function CreditCardController(props) {
  return (
    <div className='flex flex-row items-center gap-2 justify-between'>
        <Link href={`/account/${props.id}`}><button  className="bg-tertiary hover:bg-tertiaryDark py-2 px-4 rounded font-montserrat text-white font-normal py-1 px-3 ">Estado de cuenta</button></Link>
        <Link href={`/purchase/${props.id}`}><button className="bg-secondary hover:bg-secondaryDark py-2 px-4 rounded font-montserrat text-white font-normal py-1 px-3 ">Registrar Compra</button></Link>
        <Link href={`/payment/${props.id}`}><button className="bg-quaternary hover:bg-quaternaryDark py-2 px-4 rounded font-montserrat text-white font-normal py-1 px-3 ">Registrar Pago</button></Link>
        <Link href={`/transactions/${props.id}`}><button className="bg-quinary hover:bg-quinaryDark py-2 px-4 rounded font-montserrat text-white font-normal py-1 px-3 ">Transacciones</button></Link>
    </div>
  )
}

export default CreditCardController