import { NavLink } from './NavLink'

export function Footer () {
  return (
    <section className='bg-zinc-950 h-fit md:h-[70vh]'>
      <article className='p-4 h-4/5 md:p-8 text-zinc-100 flex flex-col sm:flex-row gap-8 sm:justify-evenly items-center sm:items-start'>
        <div className='pt-6 w-80'>
          <h2 className='border-b-2 border-b-orange-800 text-3xl py-2'>Shop</h2>
          <ul className='flex flex-col gap-4 text-zinc-300 text-lg pt-2'>
            <NavLink to='all-bikes' styles='w-fit text-zinc-300 hover:text-orange-500 pt-2  transition-colors'>Bikes</NavLink>
            <NavLink to='Choose a bike' styles='w-fit text-zinc-300 hover:text-orange-500 pt-2  transition-colors'>Choose a bike</NavLink>
            <NavLink to='Protection' styles='w-fit text-zinc-300 hover:text-orange-500 pt-2  transition-colors'>Protection</NavLink>
          </ul>
        </div>
        <div className='pt-6 w-80'>
          <h2 className='border-b-2 border-b-orange-900 text-3xl py-2'>Contact Us</h2>
          <ul className='flex flex-col gap-4 text-zinc-300 text-lg pt-2'>
            <li>
              <h3>Email:</h3>
              <h4 className='hover:text-orange-500 w-fit cursor-pointer'>bikebuy@gmail.com</h4>
            </li>
            <li>
              <h3>Celphone:</h3>
              <h4 className='hover:text-orange-500 w-fit cursor-pointer'>1010 1001</h4>
            </li>
            <li>
              <h3>Location:</h3>
              <h4 className='hover:text-orange-500 w-fit'>Cartago, Costa Rica</h4>
            </li>
          </ul>
        </div>
        <div className='pt-6 w-80'>
          <h2 className='border-b-2 border-b-orange-800 text-3xl py-2'>Social Media</h2>
          <ul className='flex flex-col gap-4 text-zinc-300 text-lg pt-2'>
            <li>aw</li>
            <li>ass</li>
            <li>sd</li>
          </ul>
        </div>
      </article>
      <div className='relative bottom-0 mt-12 bg-zinc-900 text-zinc-200 flex items-center justify-center p-2 font-extralight text-sm'>
        <h3>Made by Byron Segura</h3>
      </div>
    </section>
  )
}
