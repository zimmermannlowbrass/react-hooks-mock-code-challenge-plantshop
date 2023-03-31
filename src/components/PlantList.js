import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, onDeletePlant, onSetNewPlantPrice} ) {

  const plantCards = plants.map(plant => {
    return (
      <PlantCard 
      key = {plant.id} 
      plant = {plant}
      onDeletePlant = {onDeletePlant}
      onSetNewPlantPrice = {onSetNewPlantPrice} />
    )
  })

  return (
    <ul className="cards">
      {plantCards}
    </ul>
  );
}

export default PlantList;
