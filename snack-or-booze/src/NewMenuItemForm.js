import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SnackOrBoozeApi from "./Api";
import "./NewMenuItemForm.css";

const NewMenuItemForm = () => {
  const INITIAL_STATE = {
    name: "",
    itemType: "",
    description: "",
    recipe: "",
    serve: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  // handleChange updates formData with every change to form fields
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };
  
  // handleSubmit 
  async function handleSubmit(evt) {
    evt.preventDefault();
    const itemType = formData.itemType + 's';
    const id = formData.name.toLowerCase().split(' ').join('-');
    const menuItem = { id, ...formData };
    delete menuItem.itemType;
    setFormData(INITIAL_STATE);
    console.log("ITEM TYPE: ", itemType);
    await SnackOrBoozeApi.postMenuItem(menuItem, itemType);
    history.push(`/${itemType}`);
  };
 
  return (
    <div className="NewMenuItemForm">
      <h1>Add a Menu Item!</h1>
      <Form 
        className="NewMenuItemForm-form"
        onSubmit={handleSubmit}
      >
        <FormGroup>
          <Label for="name">Item Name: </Label>
          <Input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Name of menu item"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="itemType">Type</Label>
          <Input type="select" 
            name="itemType" 
            id="itemType"
            value={formData.itemType}
            onChange={handleChange}
          >
            <option>snack</option>
            <option>drink</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input 
            type="text"
            name="description" 
            id="description" 
            placeholder="Description of the menu item"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input 
            type="text" 
            name="recipe" 
            id="recipe" 
            placeholder="Recipe for the menu item" 
            value={formData.recipe}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="serve">Serve</Label>
          <Input 
            type="text" 
            name="serve" 
            id="serve" 
            placeholder="Describe how to serve the menu item" 
            value={formData.serve}
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default NewMenuItemForm;