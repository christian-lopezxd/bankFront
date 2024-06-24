import React from 'react'
import Link from 'next/link'

function CreditCardController() {
  return (
    <div className='flex flex-row items-center gap-2 justify-between'>
        <Link href='/'><button  className="bg-tertiary hover:bg-primary py-2 px-4 rounded font-montserrat text-white font-normal py-1 px-3 ">Estado de cuenta</button></Link>
        <Link href='/'><button className="bg-secondary hover:bg-primary py-2 px-4 rounded font-montserrat text-white font-normal py-1 px-3 ">Registrar Compra</button></Link>
        <Link href='/'><button className="bg-quaternary hover:bg-primary py-2 px-4 rounded font-montserrat text-white font-normal py-1 px-3 ">Registrar Pago</button></Link>
        <Link href='/'><button className="bg-quinary hover:bg-primary py-2 px-4 rounded font-montserrat text-white font-normal py-1 px-3 ">Transacciones</button></Link>
    </div>
  )
}

export default CreditCardController