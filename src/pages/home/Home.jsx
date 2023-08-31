import { NavLink } from '../../components/NavLink'
import { DeliveryServices } from './DeliveryServices'
import { HomeHelpChoose } from './HomeHelpChoose'
import { PopularProducts } from './PopularProducts'

export function HomePage () {
  return (
    <div>
      <section>
        <article className='min-h-screen opacity-90 bg-[url("../src/assets/home-image-01.jpg")] bg-cover bg-center top-0 left-0 -mt-16'>
          <aside className='min-h-screen bg-black/40 flex flex-col justify-center -mt-32 md:-mt-16'>
            <div className='text-center flex flex-col justify-center items-center gap-8 md:gap-12 text-slate-200 p-8'>
              <h3 className='text-5xl md:text-8xl'>Welcome to BikeBuy</h3>
              <h2 className='text-xl md:text-3xl'>The best bike shop in the world!</h2>
              <NavLink to='all-bikes' styles='bg-zinc-900 hover:bg-orange-500 p-12 py-4'>BIKES</NavLink>
            </div>
          </aside>
        </article>
      </section>
      <PopularProducts />
      <HomeHelpChoose />
      <DeliveryServices />
    </div>
  )
}
