export function DeliveryServices () {
  return (
    <section className='bg-gray-800'>
      <article className='h-2/3 p-8 md:p-16 flex flex-col md:flex-row gap-18 md:gap-16 font-light'>
        <img src='../src/assets/home-image-03.jpg' alt='Delivery service' className='max-w-xl' />
        <div className='text-slate-200'>
          <h2 className='text-4xl font-bold'>The best service</h2>
          <p>Free worldwide delivery in orders above $100</p>
          <ul className='text-slate-200 py-4 flex flex-row gap-8 text-lg'>
            <li className='flex flex-row gap-2 items-center'>
              <img src='../src/assets/delivery-icon.webp' alt='Fast delivery icon' />
              <h4>Fast Delivery</h4>
            </li>
            <li className='flex flex-row gap-2 items-center'>
              <img src='../src/assets/delivery-icon.webp' alt='Fast delivery icon' />
              <h4>Quality Insurance</h4>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
