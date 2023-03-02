import React from "react";
import { Container } from "semantic-ui-react";
import Items from "./Items";
import Search from "./Search";

function WardrobePage({items, setItems}){
    

    return (
        <div>
            <br />
            <h3>I have {items.length} items in my wardrobe</h3>
            <Search />
            <Container>
                <Items items={items} setItems={setItems}/>
            </Container>
        </div>
    );
}

export default WardrobePage;