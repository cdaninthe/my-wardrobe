import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return (
        <div>
            <NavLink exact to="/" activeStyle={{background: "yellow"}}>My Wardrobe |</NavLink>
            <NavLink exact to="/form" activeStyle={{background: "yellow"}}>  Add New Item  |</NavLink>
            <NavLink exact to="/suitcase" activeStyle={{background: "yellow"}}>  Suitcase</NavLink>
        </div>
    );
}

export default NavBar;