import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header';
import WardrobePage from './WardrobePage';
import NavBar from './NavBar';
import ItemForm from './ItemForm';
import { Route, Switch } from "react-router-dom";
import ClothesPage from './ClothesPage';
import ShoesAccessoriesPage from './ShoesAccessoriesPage';


function App() {
  const [items, setItems] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/items`)
        .then((r)=> r.json())
        .then((items)=> setItems(items))
    },[])

  function handleAddItem(newItem){
    console.log(newItem)
    setItems([...items, newItem])

  }

  return (
    <div className="App">
      <Header/>
      <NavBar />
      <Switch>
        <Route exact path="/form">
          <ItemForm onAddItem={handleAddItem}/>
        </Route>
        <Route exact path="/clothes">
          <ClothesPage items={items} setItems={setItems}/>
        </Route>
        <Route exact path="/shoes-accessories">
          <ShoesAccessoriesPage items={items} setItems={setItems}/>
        </Route>
        <Route exact path="/">
          <WardrobePage items={items} setItems={setItems}/>
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
