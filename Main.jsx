import React from 'react'

const Main = ({products}) => {
  return (
    <div className=' p-10 flex flex-wrap justify-evenly gap-10 mb-20'>
        {console.log(products)}
      {products.map((product) => (
        <section className=' h-72 w-52 bg-white rounded-md shadow-sm'>
            <img src={product.image} alt="" srcset="" className=' h-36 w-[75%] object-contain' />
            <h1 title={product.title} className=' text-center font-bold'>{product.title?.slice(0, 20)}</h1>
            <h3>{product.price}</h3>
            <h4>{product.category}</h4>
        </section>
      ))}
    </div>
  )
}

export default Main