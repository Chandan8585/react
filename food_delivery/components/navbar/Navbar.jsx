import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
const Navbar= ()=> {
 return(
    <nav>
    <div className="logo">
        <h1> 🍔Food Villa</h1>
    </div>

    <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#">Contact</a></li>
    </ul>

    <div className="cart">
      
        <i className="material-icons">shopping_cart</i>

        <span>0</span> 
    </div>
</nav>
 )
}

export default Navbar;
