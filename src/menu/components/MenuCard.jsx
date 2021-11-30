import React from 'react'
import PropTypes from 'prop-types'
import './CardsSection.css'

const MenuCard = ({ name, imgName }) => {

    const imgPath = `assets/${imgName}.png`

    const handleClick = (nombre) =>{
        console.log(nombre);
    }

    return (

        <div className="card">
            <img className="card-img" src={imgPath} alt={name} />
            <h3 className="card-name">{name}</h3>
            <button onClick={()=>handleClick(name)} className="card-button">Order now</button>
        </div> 
    )
}

MenuCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired
}

export default MenuCard


