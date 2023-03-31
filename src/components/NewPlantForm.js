import React from "react";

function NewPlantForm( { onAddNewPLant }) {

function handleFormSubmit(e) {
  e.preventDefault()
  const newPlant = {
    name: e.target[0].value,
    image: e.target[1].value,
    price: e.target[2].value
  }
  onAddNewPLant(newPlant)
  document.querySelector("#new_plant_form").reset()
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form id = "new_plant_form" onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
