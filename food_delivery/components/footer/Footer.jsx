import React from 'react'
import "./Footer.css"
const Footer = () => {
    
  return (
    <>
     <footer>
        <div className="footer-content">
            <div className="footer-logo">
                <img src="your-logo.png" alt="Logo" />
                <span>Food Delivery</span>
            </div>

            <div className="social-icons">
                <a href="#" target="_blank" title="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
        </div>

        <p>&copy; 2023 Food Delivery. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Footer