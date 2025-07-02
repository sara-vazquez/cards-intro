import React from 'react'
import './App.css'
import Card from './components/card/Card.jsx'
import img1 from './images/sara.png'
import img2 from './images/mirko.png'
import img3 from './images/aldo.png'

function App() {
   const handleClick = () => {
    alert("Ups 🫢, aún no hay nada por aquí, fallo mio!")
  }

  return (
    <>
    <div className="cardContainer" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    <Card 
      image={img1} alt="Sara Vázquez"
      title= "Sara Vázquez"
      description= "¡Hola 👋🏼! Soy Sara, diseñadora UX/UI y futura Full Stack Developer. En mi tiempo libre lo que más me gusta hacer es yoga, leer y pasear con mis peludos"
      buttonCard onClick={handleClick}
      glass={true}
    />

    <Card 
      image={img2} alt="Mirko"
      title= "Mirko 🐶🐾"
      description= "Soy Mirko, el abuelete de la casa. Como ya estoy un poco mayor, mis mayores hobbies son dormir en el sofá y darles mimos a mis humanos 💤 " 
      buttonCard onClick={handleClick}
      glass={true}
    />

    <Card 
      image={img3} alt="Aldo"
      title= "Aldo 🐕🐾"
      description= "Yo soy Aldo, el peque. Me encanta correr, saltar y ayudar a mi humana en la huerta. Pero lo que más me gusta es morder muebles y destrozar la ropa 😇" 
      buttonCard onClick={handleClick}
      glass={true}
    />
    </div>
    </>
  )
}

export default App;









// Ejercicio "boto"

/*
import Botoncito from './components/botoncito/Botoncito'

function App() {
  const handleClick = () => {
    alert("Ups 🫢, aún no hay links, fallo mio!")
  }

  return (
    <>
      <h1>Hola mundo</h1>
      <div className="botones">
      <Botoncito text = "Github" onClick ={handleClick} color = "orange"/>
      <Botoncito text = "LinkedIn" onClick ={handleClick} color = "lightblue"/>
      <Botoncito text = "Instagram" onClick ={handleClick} color = "purple"/>
    </div>
    </>
  )
}

export default App; */