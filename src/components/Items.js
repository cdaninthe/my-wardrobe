import React from "react";
import { Card } from "semantic-ui-react";
import Item from "./Item";

function Items({items, setItems}){
    function handleDeleteItem(deletedItem){
        const updatedItems = items.filter((item)=> item.id !== deletedItem.id)
        setItems(updatedItems)
    }

    function handleUpdateItem(updatedItem){
        const updatedItems = items.map((item) => {
            if (item.id === updatedItem.id) {
              return updatedItem;
            } else {
              return item;
            }
          });
          setItems(updatedItems)
    }

    return(
        <Card.Group itemsPerRow={4}>
            {items.map((item) => (
                <Item 
                    key={item.id} item={item} 
                    onDeleteItem={handleDeleteItem}
                    onUpdateItem={handleUpdateItem}
                />
            ))}
        </Card.Group>
    );
}

export default Items;