import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="just-text">
                    <h2 className="heading">Sing me up</h2>
                    <p className="paragraph">Be the first to know about new producs</p>
                </div>
                <form className="singup-form">
                    <input type="email" className="input-email" placeholder="Enter your email"/>
                    <button type="submit" className="form-btn">
                    <i className="fas fa-arrow-right"></i>
                    </button>
                </form>
                <p className="copyrigth">
                    HadesElLobo &copy; All Rights Reserved
                </p>
            </footer>
        </>
    )
}
