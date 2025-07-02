import React from 'react'
import './Botoncito.css'

const Botoncito = ({ text = 'Haz click aquí', color= ' #202020', onClick }) => {
  return (
    <button className='botoncito' style={{ backgroundColor: color }} onClick={onClick}>
      {text}
      
    </button>
  )
}

export default Botoncito


