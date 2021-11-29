import React from 'react'
import './CardsSection.css'

import MenuCard from './MenuCard'

export const CardsSection = () => {

    const FoodList = [
        {
            id: 1,
            name: "Fish",
            imgName: "img1"
        },
        {
            id: 2,
            name: "cake",
            imgName: "img2"
        },
        {
            id: 3,
            name: "lobster",
            imgName: "img3"
        },
    ]

    return (
        <>
            <section className="cards-section">
                <h1 className="card-title">Populars Meals</h1>
                <div className="card-wraper">
                    {
                        FoodList.map(Food => <MenuCard key={Food.id}{...Food} />)
                    }
                </div>
            </section>
        </>
    )
}
