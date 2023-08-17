import { NavLink } from './NavLink'

export function Header () {
  return (
    <header className='min-w-full sticky top-0 bg-gray-50'>
      <div className='flex flex-col align-middle md:flex-row md:justify-between h-18 min-w-full'>
        <h2 className='text-4xl w-fit m-auto md:m-0 p-4'>Bike40</h2>
        <nav>
          <ul className='flex flex-row h-10 md:min-h-full bg-gray-100 min-w-full mx-auto'>
            <NavLink style='text-base p-2 sm:text-lg md:text-xl md:p-6 px-6 bg-gray-100 hover:bg-gray-300 md:shadow-[-8px_0_8px_-5px_rgba(0,0,0,0.1)]' to='/choose-bike'>Choose a bike</NavLink>
            <NavLink to='/'>Bikes</NavLink>
            <NavLink>About Us</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}
