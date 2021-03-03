import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import Home from "./Home";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import NewMenuItemForm from "./NewMenuItemForm";

function Routes({ drinks, snacks }) {

  return (
    <Switch>
      <Route exact path="/">
        <Home snacks={snacks} drinks={drinks}/>
      </Route>
      <Route exact path="/snacks">
        <Menu items={snacks} itemType="snacks" />
      </Route>
      <Route exact path="/drinks">
        <Menu items={drinks} itemType="drinks" />
      </Route>
       <Route exact path="/new">
        <NewMenuItemForm />
      </Route>
      <Route path="/snacks/:id">
        <MenuItem items={snacks} cantFind="/snacks" />
      </Route>
      <Route path="/drinks/:id">
        <MenuItem items={drinks} cantFind="/drinks" />
      </Route>
      <Route>
        <p>Hmmm. I can't seem to find what you want.</p>
      </Route>
    </Switch>
  )
}

export default Routes;