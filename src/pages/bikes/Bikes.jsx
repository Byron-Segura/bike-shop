import { HeroImage } from '../../components/HeroImage.jsx'
import { Categories } from './Categories'
import bikes from '../../mocks/bikes.json'
import { Products } from '../../components/Products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Bikes () {
  const allBikes = bikes.bikes
  const [products, setProducts] = useState(allBikes)
  const { type } = useParams()

  if (type === undefined) {
    console.log(1)
  }

  useEffect(() => {
    if (type) {
      const filteredProducts = allBikes.filter(product => product.type === type)
      setProducts(filteredProducts)
    } else {
      setProducts(allBikes)
    }
  }, [type])

  return (
    <section className='flex flex-col md:flex-col justify-around bg-white'>
      <HeroImage image='../src/assets/all-bikes-image-01.jpg'>
        <h2 className='text-2xl md:text-4xl mt-8'>Road Bikes</h2>
        <p className='mt-8 text-lg sm:text-xl md:text-3xl pr-16'>Designed for epic roads, dominating cobbles and pure speed against the clock, our bikes unlock your potential.</p>
      </HeroImage>
      <article className='flex flex-col md:flex-row py-8 justify-between w-full'>
        <Categories />
        <div className='w-full flex flex-col justify-center items-center'>
          <Products products={products} layout='grid grid-cols-1 justify-center items-center xl:grid-cols-2 grid-flow-row gap-4 xl:gap-x-16' />
        </div>
      </article>
    </section>
  )
}
