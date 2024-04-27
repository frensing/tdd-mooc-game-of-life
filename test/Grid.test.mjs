import { describe, test } from "vitest";
import { expect } from "chai";
import { Grid } from "../src/Grid.mjs";

describe("Grid", () => {
  test("initial grid has empty cells", () => {
    const grid = new Grid(3, 3)
    
    expect(grid.toString()).to.equal(normalize(
      `...
       ...
       ...`
    ))
  });

  test('init grid with parsed grid', () => {
    const parsedBlock = [[true, true], [true, true]]
    const parsedGlider = [
      [false, true, false],
      [false, false, true],
      [true, true, true]
    ]

    let grid = new Grid(2, 2, parsedBlock)
    expect(grid.toString()).to.equal(normalize(
      `XX
       XX`
    ))

    grid = new Grid(3, 3, parsedGlider)
    expect(grid.toString()).to.equal(normalize(
      `.X.
       ..X
       XXX`
    ))
  })
});

function normalize(s) {
  return s.replaceAll(' ', '').trim() + '\n'
}
