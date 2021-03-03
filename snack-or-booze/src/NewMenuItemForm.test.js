import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewMenuItemForm from "./NewMenuItemForm";

describe("Smoke tests", () => {
  it ("renders without crashing", () => {
    render(<NewMenuItemForm />);
  });
});

describe("Form display", () => {
  it("fdsfds", () => {
    const { getByPlaceholderText } = render(<NewMenuItemForm />);
    getByPlaceholderText(Name)
  });
});

describe("Form submission", () => {
  it("fdsfds", () => {

  });
});