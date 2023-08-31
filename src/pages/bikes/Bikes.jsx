import { HeroImage } from '../../components/HeroImage'
import { Categories } from './Categories'

export function Bikes () {
  return (
    <section className='flex flex-col md:flex-col justify-around'>
      <HeroImage image='all-bikes-image-01.jpg'>
        <h2 className='text-2xl md:text-4xl mt-8'>Road Bikes</h2>
        <p className='mt-8 text-lg sm:text-xl md:text-3xl pr-16'>Designed for epic roads, dominating cobbles and pure speed against the clock, our bikes unlock your potential.</p>
      </HeroImage>
      <article className='flex flex-row'>
        <Categories />
        <ul className='p-8 flex flex-col gap-8'>
          <li><h2>qqqqq</h2></li>
          <li><h2>qqqqq</h2></li>
          <li><h2>qqqqq</h2></li>
        </ul>
      </article>
    </section>
  )
}

/*

import bikes from '../../src/mocks/bikes.json'
import { Products } from '../components/Products'

export function Bikes () {
  const products = bikes.bikes
  return (
    <section className='p-8'>
      <Products products={products} />
      <h2>Bikes</h2>
    </section>
  )
} */
