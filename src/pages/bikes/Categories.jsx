import { useState } from 'react'
import { NavLink } from '../../components/NavLink'

export function Categories () {
  const [categorieIsActive, setCategorieIsActive] = useState(false)

  const handleClick = () => {
    setCategorieIsActive(!categorieIsActive)
  }

  const categorieNavLinkStyle = categorieIsActive ? 'text-zinc-800 text-xl border-b-2 border-orange-500 lg:hover:border-b-2 lg:hover:border-orange-500 w-full py-4' : 'hidden'

  return (
    <article className='w-fit md:px-16 mb-8 mx-auto md:mx-0'>
      <ul className='flex flex-col mt-2 sticky top-8'>
        <button onClick={handleClick} className='text-orange-500 text-xl text-center border-[1px] border-orange-500 py-2 px-20 sm:px-24 lg:hover:bg-orange-500 lg:hover:text-white'>Categories</button>
        <NavLink to='road' styles={categorieNavLinkStyle}>Road</NavLink>
        <NavLink to='urban' styles={categorieNavLinkStyle}>Urban</NavLink>
        <NavLink to='gravel' styles={categorieNavLinkStyle}>Gravel</NavLink>
        <NavLink to='mountain' styles={categorieNavLinkStyle}>Mountain</NavLink>
        <NavLink to='active' styles={categorieNavLinkStyle}>Active</NavLink>
      </ul>
    </article>
  )
}

/*
  send wich nav was clicked and then filter
  the products by bike type and change the products state
*/
