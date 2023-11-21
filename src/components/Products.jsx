export function Products ({ products, layout }) {
  return (
    <>
      <ul className={layout}>
        {products.map(product => {
          return (
            <li key={product.id} className='md:w-[384px] cursor-pointer'>
              <img src={`../../src/assets/${product.image}`} alt={`Bicycle, ${product.name}`} className='h-56 hover:scale-105 transition-transform duration-300 mx-auto' />
              <h2 className='text-xl font-bold'>{product.name}</h2>
              {product.specifications ? <p className='py-2 font-extralight text-base'>{`${product.specifications[0].Chainwheel}, ${product.specifications[0].Tires}`}</p> : ''}
              <h4 className='text-lg text-orange-500 mt-2 font-bold'>{product.price}</h4>
            </li>
          )
        })}
      </ul>
    </>
  )
}
