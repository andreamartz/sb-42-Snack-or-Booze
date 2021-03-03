import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";

describe("Smoke tests", () => {
  it ("renders without crashing", () => {
    render(<MemoryRouter><Menu items={drinks} itemType="drinks"/></MemoryRouter>);
    // render(<Menu />);
  })
});
