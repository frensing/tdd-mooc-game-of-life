import { describe, test } from "vitest";
import { expect } from "chai";
import { Grid } from "../src/grid.mjs";

describe("Grid", () => {
  test("initial grid has empty cells", () => {
    const grid = new Grid(3, 3)
    
    expect(grid.toString()).to.equal(normalize(
      `...
       ...
       ...`
    ))
  });
});

function normalize(s) {
  return s.replaceAll(' ', '').trim() + '\n'
}
