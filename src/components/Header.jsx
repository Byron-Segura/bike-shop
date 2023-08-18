import { NavLink } from './NavLink'

export function Header () {
  return (
    <header className='min-w-full min-h-fit sticky top-0 bg-gray-900'>
      <nav className='flex flex-col md:flex-row md:justify-between h-18 min-w-full'>
        <NavLink to='/' style='flex flex-col justify-center text-4xl w-fit m-auto md:m-0 p-4 text-pink-600 md:px-8'>
          BikeBuy
          <small className='text-xs font-normal text-slate-200 '>
            ONLY THE BEST BIKES
          </small>
        </NavLink>
        <div className='flex flex-row items-center justify-center bg-gray-800/40 md:min-h-full'>
          <ul className='text-center grid grid-cols-3 place-content-center gap-4 p-2 px-4 '>
            <NavLink to='all-bikes'>Bikes</NavLink>
            <NavLink to='choose-bike'>Choose Bike</NavLink>
            <NavLink to='about-us'>About Us</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  )
}
