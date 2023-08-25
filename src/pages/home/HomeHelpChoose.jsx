import { NavLink } from '../../components/NavLink'

export function HomeHelpChoose () {
  return (
    <section className='h-fit flex flex-col items-center'>
      <article className='flex flex-col md:flex-row items-center justify-center py-8'>
        <img src='../src/assets/home-image-02.jpg' alt='Person riding a bicycle' className='w-72 md:w-3/6' />
        <div className='mt-8 md:mt-0 px-4 flex flex-col justify-center gap-4'>
          <h2 className='text-xl'>Don't now what type of Bicycle do you need?</h2>
          <p className='text-lg'>Let us help you!</p>
          <NavLink style='bg-red-600 hover:bg-black p-2 text-center text-white'>Choose a Bicycle</NavLink>
        </div>
      </article>
    </section>
  )
}
