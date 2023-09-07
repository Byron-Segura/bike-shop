export function HeroImage ({ children, image }) {
  return (
    <>
      <article className={`h-[45vh] sm:min-h-[70vh] min-w-full opacity-90 bg-[url("${image}")] bg-cover bg-center-top top-0 left-0`}>
        <aside className='bg-black/40 h-[40vh] md:min-h-[70vh] text-gray-50 p-4 md:p-8'>
          {children}
        </aside>
      </article>
    </>
  )
}
