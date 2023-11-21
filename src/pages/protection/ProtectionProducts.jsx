import { useState } from 'react'
import { Products } from '../../components/Products'
import products from '../../mocks/products.json'
import { Categories } from '../bikes/Categories'

export function ProtectionProducts () {
  const helmets = products.protection
  const [protectionProducts] = useState(helmets)
  return (
    <section className='p-8 bg-white'>
      <article className='flex flex-col md:flex-row py-8 justify-between w-full'>
        <Categories categories={['helmets', 'glasses', 'gloves', 'shoes']} />
        <Products products={protectionProducts} layout='grid grid-cols-1 justify-center items-center xl:grid-cols-2 grid-flow-row gap-4 xl:gap-x-16' />
      </article>
    </section>
  )
}
