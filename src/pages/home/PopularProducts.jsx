import { Products } from '../../components/Products'
import products from '../../mocks/products.json'

export function PopularProducts () {
  const popularProducts = [products.bikes[9], products.bikes[10], products.bikes[3]]

  return (
    <section className='bg-white min-h-screen flex flex-col justify-center items-center'>
      <article className='p-4 pt-24 pb-8 flex flex-col justify-center items-center max-w-7xl'>
        <h2 className='text-5xl md:text-7xl text-slate-800'>Best Sellers</h2>
        <Products products={popularProducts} layout='flex flex-col lg:flex-row py-10 gap-8 items-center justify-center' />
      </article>
    </section>
  )
}
