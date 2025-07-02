import React from 'react'
import './Card.css'
import ButtonCard from '../botoncito/ButtonCard';
 

const Card = ({ image, title, description, onClick, glass= false }) => {
    return (
        <div className={`card ${glass ? 'glass' : ''}`}>
           
            <img src={image} alt={title} className= "avatar" />
    
            <div className="card-content">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                     <div className="btnCard">
                        <ButtonCard onClick={onClick} />
                    </div>
             </div>
        </div>
    );
}

export default Card;