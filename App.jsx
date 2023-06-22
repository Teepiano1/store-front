import React, { useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { useState } from 'react'

const baseApiorl = ("https://fakestoreapi.com/")
const App = () => {
  const [pageTitle] = useState("STORE FRONT")
  const [products, setProducts] = useState([
    {
      id: 1,
      title: '...',
      price: '...',
      category: '...',
      description: '...',
      image: '...'
    },

  ])
  // to fectch the api
  const getProducts = async () => {
    try {
      const response = await fetch(baseApiorl + "products")
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
  getProducts()
}, [])

  return (
    <div className='h-[100svh] bg-[#f5f5f5]'>
      <Header pageTitle={pageTitle} />
      <section className=' h-full grid grid-cols-1 md:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr]'>
        <Sidebar />
        <Main products={products} />
      </section>
    </div>
  )
}

export default App