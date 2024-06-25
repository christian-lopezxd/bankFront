import React from 'react'
import '../../styles/globals.css';
import NavBar from '@/app/Components/navbar';
import TransactionsTable from '@/app/Components/transactions_table';
import TransactionInfo from '@/app/Components/transaction_info';

function Transactions() {
    return (
        <>
            <NavBar />
            <h1 className='font-bold  text-2xl pl-5 pt-5 '>Transacciones</h1>
            <section className="text-black flex flex-col gap-3 items-center pt-5 pl-10">
                <TransactionInfo/>
                <TransactionsTable />
            </section>
        </>
    )
}

export default Transactions