import { describe, it, expect } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";

import { Navbar } from "../src/components/NavBar";
import { MemoryRouter } from "react-router-dom";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("Navbar tests", () => {
  it("renders", () => {
    // need to wrap the Navbar component in MemoryRouter
    // becuase of the <Link> component from react-router-dom
    render(
      <MemoryRouter>
        <Navbar itemCount={3} />
      </MemoryRouter>
    );
    screen.debug();
  });
});
