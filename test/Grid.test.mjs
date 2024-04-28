import { describe, test } from "vitest";
import { expect } from "chai";
import { Grid } from "../src/Grid.mjs";
import { normalize } from "./utils.mjs";

const BLOCK_GRID = [[true, true], [true, true]]
const GLIDER_GRID = [
  [false, true, false],
  [false, false, true],
  [true, true, true]
]

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
    let grid = new Grid(2, 2, BLOCK_GRID)
    expect(grid.toString()).to.equal(normalize(
      `XX
       XX`
    ))

    grid = new Grid(3, 3, GLIDER_GRID)
    expect(grid.toString()).to.equal(normalize(
      `.X.
       ..X
       XXX`
    ))
  })
});

describe('Simulate generations', () => {
  const oneCell = [
    [false, false, false],
    [false, true, false],
    [false, false, false]
  ]

  test('a single alive cell dies with no neighbors', () => {
    const grid = new Grid(3, 3, oneCell)
    expect(grid.toString()).to.equal(normalize(
      `...
       .X.
       ...`
    ))
    grid.tick()
    expect(grid.toString()).to.equal(normalize(
      `...
       ...
       ...`
    ))
  })
})
