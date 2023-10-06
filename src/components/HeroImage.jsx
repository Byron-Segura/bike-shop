export const HeroImage = ({ children, image }) => {
  const heroImage = image
  return (
    <>
      <article className={'h-[45vh] sm:min-h-[70vh] min-w-full opacity-90")] bg-cover bg-center-top top-0 left-0'} style={{ backgroundImage: `url("${heroImage}")` }}>
        <aside className='bg-black/40 h-full text-gray-50 p-4 md:p-8'>
          {children}
        </aside>
      </article>
    </>
  )
}
