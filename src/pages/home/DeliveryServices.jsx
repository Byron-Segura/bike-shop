export function DeliveryServices () {
  return (
    <section className='bg-zinc-900'>
      <article className='h-2/3 p-6 md:p-10 flex flex-col-reverse md:flex-row gap-2 md:gap-12 font-light items-center'>
        <div className='text-slate-200 p-4 py-8'>
          <h2 className='text-4xl font-normal pb-4 text-orange-500'>The best service</h2>
          <p className='text-lg'>All the products in this website are ready for delivery. The delivery service is available worldwide. Free delivery in orders above $100 and it will be delivered in a period of 1 or 2 weeks after order the products.</p>
          <ul className='text-slate-200 py-8 flex flex-row gap-8 text-md sm:text-lg md:text-xl justify-center lg:justify-start'>
            <li className='flex flex-row gap-2 items-center'>
              <img src='../src/assets/delivery-icon.svg' alt='Fast delivery icon' />
              <h4>Fast Delivery</h4>
            </li>
            <li className='flex flex-row gap-2 items-center'>
              <img src='../src/assets/security-icon.svg' alt='Fast delivery icon' />
              <h4>Quality Insurance</h4>
            </li>
          </ul>
        </div>
        <img src='../src/assets/home-image-03.jpg' alt='Delivery service' className='w-80 sm:w-3/6' />
      </article>
    </section>
  )
}
