import { NavLink } from '../../components/NavLink'

export function Categories () {
  return (
    <article className='w-fit p-4 md:px-16'>
      <button className='text-orange-500 text-xl text-center border-[1px] border-orange-500 py-2 px-24 hover:bg-orange-500 hover:text-slate-200'>Categories</button>
      <ul className='flex  flex-row md:flex-col gap-4 mt-2'>
        <NavLink styles='text-zinc-800 border-b-2 border-zinc-500 hover:border-b-2 hover:border-orange-500 w-full pt-4'>Road</NavLink>
        <NavLink styles='text-zinc-800 border-b-2 border-zinc-500 hover:border-b-2 hover:border-orange-500 w-full pt-4'>Urban</NavLink>
        <NavLink styles='text-zinc-800 border-b-2 border-zinc-500 hover:border-b-2 hover:border-orange-500 w-full pt-4'>Gravel</NavLink>
        <NavLink styles='text-zinc-800 border-b-2 border-zinc-500 hover:border-b-2 hover:border-orange-500 w-full pt-4'>Mountain</NavLink>
        <NavLink styles='text-zinc-800 border-b-2 border-zinc-500 hover:border-b-2 hover:border-orange-500 w-full pt-4'>Active</NavLink>
      </ul>
    </article>
  )
}
