import { NavLink } from '../../components/NavLink'

export function HomeHelpChoose () {
  return (
    <section className='h-fit flex flex-col items-center bg-white'>
      <article className='flex flex-col md:flex-row items-center justify-center py-8 md:py-12 max-w-7xl'>
        <img src='../src/assets/home-image-02.jpg' alt='Person riding a bicycle' className='w-72 sm:w-3/6' />
        <div className='mt-8 md:mt-0 px-10 flex flex-col justify-center gap-8 md:gap-14'>
          <h2 className='text-xl md:text-2xl lg:text-3xl text-slate-800'>Don't now what type of Bicycle do you need?</h2>
          <p className='text-lg font-light'>We can help you to choose the perfect bike fpr youre necesities, you can choose between road bicycles, trail, active, etc. Take a look to our models and enjoy!</p>
          <NavLink style='bg-red-600 hover:bg-black p-2 text-center text-white'>Choose a Bicycle</NavLink>
        </div>
      </article>
    </section>
  )
}
