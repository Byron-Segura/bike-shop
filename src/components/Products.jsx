export function Products ({ products, layout }) {
  return (
    <>
      <ul className={layout}>
        {products.map(product => {
          return (
            <li key={product.id} className='max-w-sm cursor-pointer '>
              <img src={`../../src/assets/${product.image}.jpg`} alt={`Bicycle, ${product.name}`} className='h-56 hover:scale-105 transition-transform duration-300' />
              <h2 className='text-xl px-2 mt-8'>{product.name}</h2>
              <h4 className='text-lg text-orange-500 px-2'>{product.price}</h4>
            </li>
          )
        })}
      </ul>
    </>
  )
}

// flex flex-col lg:flex-row py-10 gap-8 items-center justify-center
