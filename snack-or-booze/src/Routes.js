import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import Home from "./Home";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import NewMenuItemForm from "./NewMenuItemForm";

function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  // NOTE: I'm not sure if I should have combined these two useEffects into one function (e.g., getMenuItems)
  // where I would make two separate API calls and update the two pieces of state separately
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);
  
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

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