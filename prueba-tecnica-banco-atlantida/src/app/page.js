import NavBar from './Components/navbar'


export default function Page() {
  return <section className="text-black font-bold flex flex-col gap-3">
    <NavBar />
   <div className='flex flex-col px-3 text-2xl'>
   <h1>Listado de Tarjetas</h1>
   </div>
  </section>
}