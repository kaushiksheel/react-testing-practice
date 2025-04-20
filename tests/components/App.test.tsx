import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Form from "../../src/components/Form";
import "@testing-library/jest-dom/vitest";

describe("App", () => {
  it("should render form component", () => {
    render(<Form />);

    const form = screen.getByTestId("form-container");
    expect(form).toBeInTheDocument();
  });
});
