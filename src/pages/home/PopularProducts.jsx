import { ProductCard } from '../../components/Products'
import bikes from '../../mocks/bikes.json'

export function PopularProducts () {
  const products = [bikes.bikes[9], bikes.bikes[10], bikes.bikes[3]]

  return (
    <section className='bg-white min-h-screen'>
      <article className='p-4 py-16 flex flex-col justify-center items-center'>
        <h2 className='text-7xl text-gray-800'>Best Sellers</h2>
        <ProductCard products={products} />
      </article>
    </section>
  )
}
