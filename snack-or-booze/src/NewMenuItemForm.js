import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from 'formik';
import SnackOrBoozeApi from "./Api";
import "./NewMenuItemForm.css";

const NewMenuItemForm = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      itemType: "",
      description: "",
      recipe: "",
      serve: ""
    },
    validate() {
      const errors = {};
      if (!formik.values.name) {
        errors.name = 'Required';
      } 
      if (!formik.values.itemType || formik.values.itemType === "Select item category") {
        errors.itemType = 'Required';
      } 
      if (!formik.values.description) {
        errors.description = 'Required';
      } 
      if (!formik.values.recipe) {
        errors.recipe = 'Required';
      } 
      if (!formik.values.serve) {
        errors.serve = 'Required';
      } 
      return errors;
    },
    onSubmit: async function(values) {
      values.itemType += 's';
      const id = values.name.toLowerCase().split(' ').join('-');
      const menuItem = { id, ...values };
      delete menuItem.itemType;
      await SnackOrBoozeApi.postMenuItem(menuItem, values.itemType);
      history.push(`/${values.itemType}`);
    }
  });

  return (
    <div className="NewMenuItemForm">
      <h1>Add a Menu Item!</h1>
      <Form 
        className="NewMenuItemForm-form"
        onSubmit={formik.handleSubmit}
      >
        <FormGroup>
          <Label for="name">Item Name: </Label>
          <Input 
            type="text" 
            name="name" 
            id="name" 
            placeholder="Name of menu item"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.className && formik.errors.name ? (
            <div className="NewMenuItemForm-error">{formik.errors.name}</div>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="itemType">Type</Label>
          <Input type="select" 
            name="itemType" 
            id="itemType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.itemType}
          >
            <option>Select item category</option>
            <option>snack</option>
            <option>drink</option>
          </Input>
          {formik.touched.itemType && formik.errors.itemType ? (
            <div className="NewMenuItemForm-error">{formik.errors.itemType}</div>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input 
            type="text"
            name="description" 
            id="description" 
            placeholder="Description of the menu item"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="NewMenuItemForm-error">{formik.errors.description}</div>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input 
            type="text" 
            name="recipe" 
            id="recipe" 
            placeholder="Recipe for the menu item" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.recipe}
          />
          {formik.touched.recipe && formik.errors.recipe ? (
            <div className="NewMenuItemForm-error">{formik.errors.recipe}</div>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="serve">Serve</Label>
          <Input 
            type="text" 
            name="serve" 
            id="serve" 
            placeholder="Describe how to serve the menu item" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.serve}
          />
          {formik.touched.serve && formik.errors.serve ? (
            <div className="NewMenuItemForm-error">{formik.errors.serve}</div>
          ) : null}
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default NewMenuItemForm;