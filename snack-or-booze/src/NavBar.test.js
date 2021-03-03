import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Smoke tests", () => {
  it ("renders without crashing", () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>);
  })
});
