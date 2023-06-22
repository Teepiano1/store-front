import React from 'react'

const Header = (props) => {
  return (
    <header className=' h-20 flex items-center justify-center shadow-sm bg-white z-10'>
        <h1 className=' text-3xl font-bold'>{props.pageTitle}</h1>
    </header>
  )
}

export default Header