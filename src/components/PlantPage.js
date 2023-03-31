import React, { useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

  function handleAddNewPLant(newPlant) {
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(newPlant => {
      setPlants([...plants, newPlant])
    })
  }

  function handleDeletePLant(deletedPlant) {
    fetch(`http://localhost:6001/plants/${deletedPlant.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const newPlants = plants.filter(plant => plant.id !== deletedPlant.id)
      setPlants(newPlants)
    })
  }
  
  const searchedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search))

  function setNewPlantPrice(updatedPrice, updatedPlantID) {
    fetch(`http://localhost:6001/plants/${updatedPlantID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( {
        price : updatedPrice
      })
    })
    .then(r => r.json())
    .then(() => {
      const updatedPlants = searchedPlants.map(plant => {
        if (plant.id === updatedPlantID) {
          return {
            price : updatedPrice,
            id : plant.id,
            image: plant.image,
            name: plant.name

          }
        } else {
          return plant
        }
      })
      setPlants(updatedPlants)
    })
  }


  return (
    <main>
      <NewPlantForm onAddNewPLant = {handleAddNewPLant} />
      <Search search = {search} onSearchChange = {setSearch}/>
      <PlantList 
      plants = {searchedPlants} 
      onDeletePlant = {handleDeletePLant}
      onSetNewPlantPrice = {setNewPlantPrice}/>
    </main>
  );
}

export default PlantPage;
