import { describe, test } from "vitest";
import { expect } from "chai";
import { Grid } from "../src/Grid.mjs";
import { normalize } from "./utils.mjs";

const parsedBlock = [[true, true], [true, true]]
const parsedGlider = [
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

describe('Simulate one generation', () => {
  const oneCell = [
    [false, false, false],
    [false, true, false],
    [false, false, false]
  ]

  test('a single cell dies', () => {
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

  test('cells with one neighbor die', () => {
    const grid = new Grid(2, 1, [[true, true]])
    expect(grid.toString()).to.equal('XX')
    grid.tick()
    expect(grid.toString()).to.equal('..')
  })

  test('cells with two neighbors survive', () => {
    const grid = new Grid(3, 1, [[true, true, true]])
    expect(grid.toString()).to.equal('XXX')
    grid.tick()
    expect(grid.toString()).to.equal('.X.')
    grid.tick()
    expect(grid.toString()).to.equal('...')
  })
})
