export function Products (products) {
  console.log(products)
  return (
    <>
      <ul className='flex flex-col lg:flex-row py-10 gap-8 items-center justify-center'>
        {products.products.map(product => {
          return (
            <li key={product.id} className='max-w-sm cursor-pointer hover:scale-105 transition-transform duration-150'>
              <img src={`../../src/assets/${product.image}.jpg`} alt={`Bicycle image, ${product.name}`} className='h-56' />
              <h2 className='text-xl px-2 mt-8'>{product.name}</h2>
              <h4 className='text-lg text-red-600 font-light px-2'>{product.price}</h4>
            </li>
          )
        })}
      </ul>
    </>
  )
}
