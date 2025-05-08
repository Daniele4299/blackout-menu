import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-content">
        <p className="footer-copyright">
               Prodotto (*) Surgelato (**) Abbattuto
            </p>
            <p className="footer-copyright">
                Copyright 2025 © Blackout -&nbsp;<a href="https://danielebonadonna.it" target="_blank" rel="noopener noreferrer" className="footer-link">Ing. D.B.</a>
            </p>
        </div>
    </div>
  )
}

export default Footer;
