import React from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar= ()=> {  
    const cart = useSelector((store)=> store.cart.items);
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

        <span>{cart.length} ok</span> 
    </div>
</nav>
 )
}

export default Navbar;
