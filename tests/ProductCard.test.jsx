import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { ProductCard } from "../src/components/ProductCard";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("ProductCard", () => {
  it("renders", () => {
    render(
      <ProductCard
        title="Jacket"
        imageUrl={"https://placehold.co/600x400"}
        description={"A puffer jacket for the coldest of nights"}
        price={300.0}
        category={"men's jacket"}
        rating={3.6}
        quantity={1}
      />
    );
    screen.debug();
  });
});
