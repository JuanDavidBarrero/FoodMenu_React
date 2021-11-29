import React, { useEffect } from 'react'
import './HeaderSecction.css'


export const HeaderSecction = () => {

    useEffect(() => {

        const icons = document.querySelectorAll(".icons-wrapper i");
        let i = 1;

        setInterval(() => {
            i++;
            const icon = document.querySelector(".icons-wrapper .change");
            icon.classList.remove('change');
            if (i > icons.length) {
                icons[0].classList.add('change');
                i = 1
            } else {

                icon.nextElementSibling.classList.add('change');
            }
        }, 3000);

    }, [])

    return (
        <>
            <section className="menu-header">
                <h1 className="header-title">Variety Of Foods</h1>
                <div className="icons-wrapper">
                    <i className="fas fa-egg change"></i>
                    <i className="fas fa-stroopwafel"></i>
                    <i className="fas fa-cheese"></i>
                    <i className="fas fa-hotdog"></i>
                    <i className="fas fa-apple-alt"></i>
                    <i className="fas fa-ice-cream"></i>
                    <i className="fas fa-drumstick-bite"></i>
                    <i className="fas fa-fish"></i>
                    <i className="fas fa-cookie"></i>
                    <i className="fas fa-seedling"></i>
                </div>
            </section>
        </>
    )
}
