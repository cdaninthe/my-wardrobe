import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import Filter from "./Filter";
import Items from "./Items";
import Search from "./Search";

function WardrobePage({items, setItems}){
    const [search, setSeach] = useState('')
    const [selectedType, setSelectedType] = useState("All");


    const updatedItems = items.filter((item) => (
        item.name.toLowerCase().includes(search.toLowerCase()) && 
        ((selectedType === "All") ?  true : item.type === selectedType)
    ))


    function handleTypeChange(e) {
        setSelectedType(e.target.value);
    }


    function handleSortChange(e){
        e.target.value === "name" ? setItems(sortByName()) : setItems(sortByColor())
    }

    function sortByName(){
        const sortedNames = [...items].sort((a,b) => {
            const nameA = a.name.toUpperCase(); 
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
        })
        return (sortedNames)
    }

    function sortByColor(){
        const sortedColors = [...items].sort((a,b) => {
            const nameA = a.color.toUpperCase(); 
            const nameB = b.color.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
        })
        return(sortedColors)
    }

    return (
        <div>
            <br />
            <h3>I have {items.length} items in my wardrobe</h3>
            <Search setSearch={setSeach}/>
            <Filter onTypeChange={handleTypeChange} onSortChange={handleSortChange}/>
            <Container>
                <Items items={updatedItems} setItems={setItems}/>
            </Container>
        </div>
    );
}

export default WardrobePage;