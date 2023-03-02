import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return (
        <div>
            <NavLink exact to="/" activeStyle={{background: "yellow"}}>My Wardrobe |</NavLink>
            <NavLink exact to="/clothes" activeStyle={{background: "yellow"}}>  Clothes  |</NavLink>
            <NavLink exact to="/shoes-accessories" activeStyle={{background: "yellow"}}>  Shoes & Accessories  |</NavLink>
            <NavLink exact to="/form" activeStyle={{background: "yellow"}}>  Add New Item  </NavLink>
        </div>
    );
}

export default NavBar;