import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenuItem from "./MenuItem";

describe("Smoke tests", () => {
  it ("renders without crashing", () => {
    // render(<MemoryRouter><MenuItem /></MemoryRouter>);
    render(<MenuItem />);
  })
});
