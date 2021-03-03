import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SnackOrBoozeApi from "./Api";
import "./App.css";
import Routes from "./Routes";

function App() {
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
    <div className="App">
      <NavBar />
      <main>
        <Routes drinks={drinks} snacks={snacks}/>
      </main>
    </div>
  );
}

export default App;
