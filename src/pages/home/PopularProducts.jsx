import { Products } from '../../components/Products'
import bikes from '../../mocks/bikes.json'

export function PopularProducts () {
  const products = [bikes.bikes[9], bikes.bikes[10], bikes.bikes[3]]

  return (
    <section className='bg-white min-h-screen flex flex-col justify-center items-center'>
      <article className='p-4 pt-24 pb-8 flex flex-col justify-center items-center max-w-7xl'>
        <h2 className='text-5xl md:text-7xl text-gray-800'>Best Sellers</h2>
        <Products products={products} />
      </article>
    </section>
  )
}
