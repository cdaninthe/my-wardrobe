import React from "react";

function Filter({onTypeChange, onSortChange}){

    return(
        <div>
            <h1>insert filter here</h1>
            <select name="filter" onChange={onTypeChange}>
                <option value="All">Show only...</option>
                <option value="Top">Tops</option>
                <option value="Pants">Pants</option>
                <option value="Shorts">Shorts</option>
                <option value="Skirt">Skirts</option>
                <option value="Dress">Dresses</option>
                <option value="Romper">Rompers</option>
                <option value="Outerwear">Outerwear</option>
                <option value="Accessory">Accessories</option>
                <option value="Shoes">Shoes</option>
            </select>


            <select name="sort" onChange={onSortChange}>
                <option value="All">Sort wardrode by...</option>
                <option value="name">name</option>
                <option value="color">color</option>
            </select>
        </div>
    );
}

export default Filter;