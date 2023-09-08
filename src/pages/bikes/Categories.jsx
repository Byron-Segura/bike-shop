import { useState } from 'react'
import { NavLink } from '../../components/NavLink'

export function Categories () {
  const [categorieIsActive, setCategorieIsActive] = useState(false)

  const categorieClick = () => {
    setCategorieIsActive(!categorieIsActive)
  }

  const categorieNavLinkStyle = categorieIsActive ? 'text-zinc-800 border-b-2 border-zinc-500 hover:border-b-2 hover:border-orange-500 w-full pt-4' : 'hidden'

  return (
    <article className='w-fit p-4 md:px-16'>
      <ul className='flex flex-row md:flex-col gap-4 mt-2 sticky top-8'>
        <button onClick={() => categorieClick()} className='text-orange-500 text-xl text-center border-[1px] border-orange-500 py-2 px-24 hover:bg-orange-500 hover:text-white'>Categories</button>
        <NavLink styles={categorieNavLinkStyle}>Road</NavLink>
        <NavLink styles={categorieNavLinkStyle}>Urban</NavLink>
        <NavLink styles={categorieNavLinkStyle}>Gravel</NavLink>
        <NavLink styles={categorieNavLinkStyle}>Mountain</NavLink>
        <NavLink styles={categorieNavLinkStyle}>Active</NavLink>
      </ul>
    </article>
  )
}
