import React from "react";
import "./navbar.css";
const Navbar= ()=> {
 return(
    <nav>
    <div class="logo">
        <h1> 🍔Food Villa</h1>
    </div>

    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>

    <div class="cart">
        <img src="cart-icon.png" alt="Cart" />
        <span>0</span> 
    </div>
</nav>
 )
}

export default Navbar;
