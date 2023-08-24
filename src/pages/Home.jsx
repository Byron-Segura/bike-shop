import { NavLink } from '../components/NavLink'

export function HomePage () {
  return (
    <div>
      <section>
        <article className='min-h-screen opacity-90 bg-[url("../src/assets/home-image-01.jpg")] bg-cover bg-center top-0 left-0 -mt-16'>
          <aside className='min-h-screen bg-black/40 flex flex-col justify-center -mt-32 md:-mt-16'>
            <div className='text-center flex flex-col justify-center items-center gap-8 md:gap-12 text-slate-200 p-8'>
              <h3 className='text-5xl md:text-8xl'>Welcome to BikeBuy</h3>
              <h2 className='text-xl md:text-3xl'>The best bike shop in the world!</h2>
              <NavLink to='all-bikes' style='bg-gray-900 hover:bg-pink-700 p-12 py-4'>BIKES</NavLink>
            </div>
          </aside>
        </article>
      </section>
      <section className='bg-gray-100 min-h-screen'>
        <article>
          <h2>Most Popular Products</h2>
        </article>
      </section>
      <section className='h-72'>
        <article>
          <div>
            <h2>Don't now what Bicycle you need?</h2>
            <p>Let us help you!</p>
            <NavLink style='bg-gray-900 hover:bg-pink-700 p-12 py-4'>Choose a Bicycle</NavLink>
          </div>
        </article>
      </section>
      <section>
        <article className='bg-teal-900 h-96'>
          <h2>Tienda Virtual de ciclismo</h2>
          <p>Envios gratuitos mundialmente para compras mayores de $100</p>
          <NavLink style='bg-gray-900 hover:bg-pink-700 p-12 py-4'>About Us</NavLink>
        </article>
      </section>
    </div>
  )
}
