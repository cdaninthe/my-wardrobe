import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function Item({item, onDeleteItem, onUpdateItem}){
    const [pack, setPack]= useState(false)
    const [isHidden, setHidden]=useState("hidden")
    const [newImage, setNewImage]= useState('')
    
    function handleDeleteClick(){
        fetch(`http://localhost:3000/items/${item.id}`, {
            method: "DELETE",
        })
        .then((r)=> r.json())
        .then(()=> onDeleteItem(item))
    }
    
    function handlePackClick(){
        if (pack) {
            setPack(false)
        } else {
            setPack(true)
        }
    }

    function handleUpdateClick(){
        isHidden ? setHidden("") : setHidden("hidden")
    }

    function handleSubmitUpdate(e){
        e.preventDefault()
        
        fetch(`http://localhost:3000/items/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json',
            }, 
            body: JSON.stringify({
                image: newImage,
            }),
        })
        
        .then((r)=> r.json())
        .then((updatedItem)=> onUpdateItem(updatedItem))
        isHidden ? setHidden("") : setHidden("hidden")
    }

    return(
        <Card>
            <div className="image">
            <img alt={item.name} src={item.image}/>
            </div>
            <div className="content">
                <div className="header">{item.name}</div>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                {pack ? 
                    (<button onClick={handlePackClick} className='active'>Packed</button>) 
                    :
                    (<button onClick={handlePackClick}>Pack for Trip</button>)
                }
                <button onClick={handleDeleteClick}>Donate / Declutter</button>
                <button onClick={handleUpdateClick}>Update Item Image</button> 
                <form hidden={isHidden} onSubmit={handleSubmitUpdate}>
                    <input placeholder="insert new image..." onChange={(e)=> setNewImage(e.target.value)}></input>
                    <button type="submit">Submit Update</button>
                </form>             
            </div>
        </Card>
    );
}

export default Item;