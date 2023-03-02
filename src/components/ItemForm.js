import React, {useState} from "react";

function ItemForm({onAddItem}){
    const [name, setName] = useState('')
    const [image, setImage]=useState('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png')
    const [size, setSize] = useState('')
    const [color, setColor] = useState('')
    const [type, setType] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const itemData = {
            name: name, 
            image: image,
            size: size,
            color: color,
            type: type
        }
        console.log(itemData)

        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        })
        .then((r) => r.json())
        .then((newItem) => onAddItem(newItem));
    }

    return(
        <div>
            <br/>
            <h1>New Item form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Item name" 
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text" name="image" placeholder="Image URL" 
                    onChange={(e) => setImage(e.target.value)}
                />
                <input type="text" name="size" placeholder="Size" 
                    onChange={(e) => setSize(e.target.value)}
                />
                <input type="text" name="color" placeholder="Color" 
                    onChange={(e) => setColor(e.target.value)}
                />
                <select name="type" onChange={(e)=> setType(e.target.value)}>
                        <option value="">--Item Type--</option>
                        <option value="Top">Top</option>
                        <option value="Pants">Pants</option>
                        <option value="Shorts">Shorts</option>
                        <option value="Skirt">Skirt</option>
                        <option value="Dress">Dress</option>
                        <option value="Romper">Romper</option>
                        <option value="Outerwear">Outerwear</option>
                        <option value="Accessory">Accessory</option>
                        <option value="Shoes">Shoes</option>
                </select>
                <button type="submit" className="active">Add Item</button>
            </form>
        </div>
        
    
    );
}

export default ItemForm;