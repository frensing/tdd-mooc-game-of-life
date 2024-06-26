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

  test('can return grid for encoding', () => {
    const grid = new Grid(2, 2, BLOCK_GRID)
    expect(grid.getGrid()).to.deep.equal(BLOCK_GRID)
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
  test('alive cells with one neigh die', () => {
    const grid = new Grid(2, 1, [[true, true]])
    expect(grid.toString()).to.equal('XX')
    grid.tick()
    expect(grid.toString()).to.equal('..')
  })
  test('alive cells with two neigh survive', () => {
    const grid = new Grid(3, 1, [[true, true, true]])
    expect(grid.toString()).to.equal('XXX')
    grid.tick()
    expect(grid.toString()).to.equal('.X.')
    grid.tick()
    expect(grid.toString()).to.equal('...')
  })

  test('dead cell with two neigh do not come alive', () => {
    const grid = new Grid(3, 1, [[true, false, true]])
    expect(grid.toString()).to.equal('X.X')
    grid.tick()
    expect(grid.toString()).to.equal('...')
  })

  test('cells with more than 3 neigh die, cells with exact 3 neigh come alive', () => {
    const grid = new Grid(3, 3, [
      [false, true, false],
      [true, true, true],
      [false, true, false]
    ])
    expect(grid.toString()).to.equal(normalize(
      `.X.
       XXX
       .X.`
    ))
    grid.tick()
    expect(grid.toString()).to.equal(normalize(
      `XXX
       X.X
       XXX`
    ))
    grid.tick()
    expect(grid.toString()).to.equal(normalize(
      `X.X
       ...
       X.X`
    ))
  })

  test('dead cells with 3 neigh come alive', () => {
    const grid = new Grid(2, 2, [
      [true, true],
      [true, false]
    ])
    expect(grid.toString()).to.equal(normalize(
      `XX
       X.`
    ))
    grid.tick()
    expect(grid.toString()).to.equal(normalize(
      `XX
       XX`
    ))
    grid.tick()
    expect(grid.toString()).to.equal(normalize(
      `XX
       XX`
    ))
  })
})
