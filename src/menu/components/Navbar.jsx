import React, { useState } from 'react'

import './Navbar.css'

export const Navbar = () => {

    const [active, setActive] = useState(false)

    const handleClikc = () => {
        setActive(!active)
    }

    return (
        <>
            <nav className={`navbar ${active ? "change" : ""}`}>
                <a href="home" className="navbar-links">
                    <i className="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="home" className="navbar-links">
                    <i className="fas fa-utensils"></i>
                    <span>Meals</span>
                </a>
                <a href="home" className="navbar-links">
                    <i className="fas fa-hamburger"></i>
                    <span>Burgue</span>
                </a>
                <a href="home" className="navbar-links">
                    <i className="fas fa-pizza-slice"></i>
                    <span>Pizza</span>
                </a>
                <a href="home" className="navbar-links">
                    <i className="fas fa-blender-phone"></i>
                    <span>Contact</span>
                </a>
            </nav>

            <div onClick={handleClikc} className={`menu ${active ? "change" : ""} `}></div>
        </>
    )
}
