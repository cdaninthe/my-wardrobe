import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import Items from "./Items";
import Search from "./Search";

function WardrobePage({items, setItems}){
    const [search, setSeach] = useState('')

    const updatedItems = items.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase())
    ))

    return (
        <div>
            <br />
            <h3>I have {items.length} items in my wardrobe</h3>
            <Search setSearch={setSeach}/>
            <Container>
                <Items items={updatedItems} setItems={setItems}/>
            </Container>
        </div>
    );
}

export default WardrobePage;