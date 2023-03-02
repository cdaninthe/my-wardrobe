import React from "react";
import { Container } from "semantic-ui-react";
import Items from "./Items";

function ShoesAccessoriesPage({items, setItems}){
    const updatedItems = items.filter((item) => (
        (item.type === 'Shoes' || item.type ==='Accessory')
    ))

    return(
        <div>
            <br/>
            <h1>My Shoes & Accessories</h1>
            <Container>
                <Items items={updatedItems} setItems={setItems}/>
            </Container>
        </div>
    );
}

export default ShoesAccessoriesPage;