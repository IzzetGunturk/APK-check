import React from 'react'
import Logo from '../img/logo.svg'

function header() {
  return (
    <header className='shadow-md'>
      <img src={Logo} className='w-52 mx-auto py-3' alt='Logo' />
    </header>
  )
}

export default header