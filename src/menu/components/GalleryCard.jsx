import React from 'react'
import PropTypes from 'prop-types'

import './Gallery.css'

const GalleryCard = ({ name, imgName }) => {
    
    const imgPath = `assets/${imgName}.jpg`
    
    return (
        <>
            <a href="home" title="OrderNow" className="gallery-link">
                <img src={imgPath} alt={name} className="gallery-img" />
                <h3 className="gallery-name">{name}</h3>
                <p className="gallery-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, qui repudiandae consectetur eos laudantium alias? Fugit maiores nam provident repellendus deserunt veritatis aperiam ab commodi architecto temporibus doloribus, dolore ducimus!</p>
            </a>
        </>
    )
}

GalleryCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgName: PropTypes.string.isRequired
}

export default GalleryCard
