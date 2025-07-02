import React from 'react'
import './ButtonCard.css'

const ButtonCard = ({ text = 'Ver más ➞', color= ' #202020', onClick }) => {
  return (
    <button className='buttonCard' style={{ backgroundColor: color }} onClick={onClick}>
      {text}
      
    </button>
  )
}

export default ButtonCard;