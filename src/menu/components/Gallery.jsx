import React from 'react'


import './Gallery.css'
import GalleryCard from './GalleryCard';

export const Gallery = () => {

    const galleryImg = [
        {
            name:"Pacakes",
            imgName:"gallery-img-1"
        },
        {
            name:"Cupcakes",
            imgName:"gallery-img-2"
        },
        {
            name:"Hummus",
            imgName:"gallery-img-3"
        },
        {
            name:"Hambuger",
            imgName:"gallery-img-4"
        },
        {
            name:"Salmon",
            imgName:"gallery-img-5"
        },
        {
            name:"Vegetable",
            imgName:"gallery-img-6"
        },
    ];

    return (
        <>
            <section className="galley-section">
                <h1 className="gallery-title">Gallery</h1>
                <div className="gallery-wraper">
                   {
                       galleryImg.map( img => <GalleryCard key={img.name}{...img} />  )
                   } 
                </div>
            </section>
        </>
    )
}
