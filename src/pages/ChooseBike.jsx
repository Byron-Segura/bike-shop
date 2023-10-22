import { HeroImage } from '../components/HeroImage'
import { NavLink } from '../components/NavLink'

export function ChooseBike () {
  const navLinkStyle = 'bg-orange-500 hover:bg-zinc-800 p-4 px-6 text-center text-white w-[300px]'

  return (
    <section>
      <HeroImage image='../src/assets/choose-bike-hero-img.jpeg'>
        <h2 className='text-2xl md:text-4xl mt-8 '>CHOOSE BIKE</h2>
        <p className='mt-8 text-lg sm:text-xl md:text-3xl pr-16'>Choose a bike acording to your lifestyle.</p>
      </HeroImage>
      <ul className='p-8 flex flex-col gap-8 justify-center max-w-7xl align-middle'>
        <li className='flex flex-col md:flex-row gap-8'>
          <img src='../src/assets/choose-road-bike.jpg' className='h-[250px] min-w-[400px]' alt='' />
          <aside className='flex flex-col gap-8 max-w-3xl'>
            <h3 className='text-3xl text-zinc-700'>Road Bikes</h3>
            <p>The road bike stands for purist design and sporty cycling on the finest asphalt and quickly invites you to chase records thanks to its particularly good rolling characteristics. The E version lets you fly effortlessly over the road, even uphill.</p>
            <NavLink to='../bikes/road' styles={navLinkStyle}>See Road Bikes</NavLink>
          </aside>
        </li>
        <li className='flex flex-col md:flex-row gap-8'>
          <img src='../src/assets/choose-urban-bike.jpg' className='h-[250px] w-[400px]' alt='' />
          <aside className='flex flex-col gap-8 max-w-3xl'>
            <h3 className='text-3xl text-zinc-700'>Urban Bikes</h3>
            <p>Whether with or without a motor, urban bikes are perfectly suited to your needs in the urban jungle and are therefore the ideal mobility solution for getting around the city healthily and independently.</p>
            <NavLink to='../bikes/urban' styles={navLinkStyle}>See Urban Bikes</NavLink>
          </aside>
        </li>
        <li className='flex flex-col md:flex-row gap-8'>
          <img src='../src/assets/choose-gravel-bike.jpg' className='h-[250px] w-[400px]' alt='' />
          <aside className='flex flex-col gap-8 max-w-3xl'>
            <h3 className='text-3xl text-zinc-700'>Gravel Bikes</h3>
            <p>Where the road ends, the fun begins for a gravel biker. Gravel bikes are suitable for moderate terrain, but also for the road. So whether for sporty after-work laps or maximum flexibility in everyday life, this type of bike is the perfect choice.</p>
            <NavLink to='../bikes/gravel' styles={navLinkStyle}>See Gravel Bikes</NavLink>
          </aside>
        </li>
        <li className='flex flex-col md:flex-row gap-8'>
          <img src='../src/assets/choose-mountain-bike.jpg' className='h-[250px] w-[400px]' alt='' />
          <aside className='flex flex-col gap-8 max-w-3xl'>
            <h3 className='text-3xl text-zinc-700'>Mountain Bikes</h3>
            <p>The MTB is suitable for almost any surface and can offer you everything from relaxed off-road riding fun to 100% action on the trails in rough terrain. E-MTBs are also no longer a rarity. Even sworn MTB riders say: pure riding fun!</p>
            <NavLink to='../bikes/mountain' styles={navLinkStyle}>See Mountain Bikes</NavLink>
          </aside>
        </li>
        <li className='flex flex-col md:flex-row gap-8'>
          <img src='../src/assets/choose-active-bike-true.jpg' className='h-[250px] w-[400px]' alt='' />
          <aside className='flex flex-col gap-8 max-w-3xl'>
            <h3 className='text-3xl text-zinc-700'>City Bikes</h3>
            <p>Whether you're conquering mountain trails, cruising through city streets, or embarking on long distance touring, active bikes offer the perfect mobility solution to keep you on the move and in peak physical condition.</p>
            <NavLink to='../bikes/active' styles={navLinkStyle}>See Active Bikes</NavLink>
          </aside>
        </li>
      </ul>
    </section>
  )
}
