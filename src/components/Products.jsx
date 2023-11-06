export function Products ({ products, layout }) {
  const handleClick = (id) => {
    console.log(id)
  }

  return (
    <>
      <ul className={layout}>
        {products.map(product => {
          return (
            <li key={product.id} className='max-w-sm cursor-pointer' onClick={() => handleClick(product.id)}>
              <img src={`../../src/assets/${product.image}`} alt={`Bicycle, ${product.name}`} className='h-56 hover:scale-105 transition-transform duration-300' />
              <h2 className='text-xl px-2 mt-8 font-bold'>{product.name}</h2>
              <p className='px-2 pr-8 font-extralight text-base'>{`${product.specifications[0].Chainwheel}, ${product.specifications[0].Chainwheel}`}</p>
              <h4 className='text-lg text-orange-500 px-2 font-normal'>{product.price}</h4>
            </li>
          )
        })}
      </ul>
    </>
  )
}
