import React, { useState } from "react";

function PlantCard( {plant, onDeletePlant, onSetNewPlantPrice} ) {

  const [isInStock, setStockStatus] = useState(true)

  function toggleInStock() {
    setStockStatus(!isInStock)
  }

  function handleDelete(){
    onDeletePlant(plant)
  }

  function changePrice(direction) {

    const addOrSubtract = direction ? .1 : -.1
    const newPlantPrice = Math.round((plant.price + addOrSubtract) * 100) / 100
    console.log(newPlantPrice)
    onSetNewPlantPrice(newPlantPrice, plant.id)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <div className="priceChanger">
        <p>Change the price:</p>
        <button onClick={() => changePrice(true)}>+.10</button>
        <button onClick={() => changePrice(false)}>-.10</button>
      </div>
      {isInStock ? (
        <button onClick = {toggleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick = {toggleInStock} >Out of Stock</button>
      )}
      <button onClick = {handleDelete} >Delete</button>
    </li>
  );
}

export default PlantCard;
