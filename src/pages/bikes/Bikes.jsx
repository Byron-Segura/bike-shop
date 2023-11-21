import { HeroImage } from '../../components/HeroImage.jsx'
import { Categories } from './Categories'
import products from '../../mocks/products.json'
import { Products } from '../../components/Products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Bikes () {
  const allBikes = products.bikes
  const heroDescriptions = products.heroImageDescriptions
  const heroImagePath = products.heroImagePath
  const [pageProducts, setPageProducts] = useState(allBikes)
  const { type } = useParams()

  useEffect(() => {
    if (type) {
      const filteredPageProducts = allBikes.filter(product => product.type === type)
      setPageProducts(filteredPageProducts)
    } else {
      setPageProducts(allBikes)
    }
  }, [type])

  return (
    <section className='flex flex-col md:flex-col justify-around bg-white'>
      <HeroImage image={`../src/assets/${heroImagePath[type] || 'all-bikes-hero.jpg'}`}>
        <h2 className='text-2xl md:text-4xl mt-8 capitalize'>{type || 'Simply Buy Your Bike Online'}</h2>
        <p className='mt-8 text-lg sm:text-xl md:text-2xl max-w-5xl'>{heroDescriptions[type] || 'Cycling is healthy, reduces stress instantly and is also a eco-friendly way of transportation.'}</p>
      </HeroImage>
      <article className='flex flex-col md:flex-row py-8 justify-between w-full'>
        <Categories categories={['road', 'urban', 'gravel', 'mountain', 'active']} />
        <div className='w-full flex flex-col justify-center items-center'>
          <Products products={pageProducts} layout='grid grid-cols-1 justify-center items-center xl:grid-cols-2 grid-flow-row gap-4 xl:gap-x-16' />
        </div>
      </article>
    </section>
  )
}
