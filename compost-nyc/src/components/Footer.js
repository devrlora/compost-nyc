import React from 'react'
import '../styling/Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer-container'>
            <div className='footer'>
                <h2>Copyright © {currentYear}</h2>
            </div>
        </div>
        
    )
}
