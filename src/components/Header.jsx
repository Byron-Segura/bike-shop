import { NavLink } from './NavLink'

export function Header () {
  return (
    <header className='min-w-full min-h-fit relative top-0 bg-gray-900 z-50'>
      <nav className='flex flex-col md:flex-row md:justify-between h-18 min-w-full'>
        <NavLink to='/' styles='flex flex-col justify-center text-4xl w-fit m-auto md:m-0 p-4 text-orange-500 md:px-8 font-medium'>
          BikeBuy
          <small className='text-xs font-normal text-slate-200 '>
            ONLY THE BEST BIKES
          </small>
        </NavLink>
        <div className='flex flex-row items-center justify-center md:min-h-full'>
          <ul className='text-center grid grid-cols-3 auto-cols-auto sm:grid-cols-4 place-content-center gap-2 md:gap-4 p-2 px-4 '>
            <NavLink to='bikes'>Bicycles</NavLink>
            <NavLink to='choose-bike'>Choose Bike</NavLink>
            <NavLink to='protection-gear'>Protection</NavLink>
            <NavLink to='about-us' styles='text-base md:text-md md:hover:text-orange-500 text-slate-200 transition-colors font-medium col-start-2 sm:col-start-auto pr-4'>About Us</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  )
}
