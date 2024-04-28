import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Parser } from "../src/Parser.mjs";
import { normalize } from "./utils.mjs";

const BLOCK = 
  `x = 2, y = 2
   2o$2o!`

const BLOCK_GRID = [[true, true], [true, true]]

const GLIDER =  
  `x = 3, y = 3
   bo$2bo$3o!`

const GLIDER_GRID = [
  [false, true, false],
  [false, false, true],
  [true, true, true]
]

const GLIDER_WITH_COMMENTS = 
  `#C This is a glider.
   x = 3, y = 3
   bo$2bo$3o!`

const GOSPER_GLIDER_GUN = 
  `x = 36, y = 9
   24bo$22bobo$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o$2o8bo3bob2o4b
   obo$10bo5bo7bo$11bo3bo$12b2o!`

describe('Parser', () => {
  test('can extract width and height from rle', () => {
    const parser = new Parser(GLIDER)
    expect(parser.getWidth()).to.equal(3)
    expect(parser.getHeight()).to.equal(3)
  })

  test('can extract the pattren from rle', () => {
    const parser = new Parser(GLIDER)
    expect(parser.getPattern()).to.equal('bo$2bo$3o!')
  })

  test('can extract long patterns', () => {
    const parser = new Parser(GOSPER_GLIDER_GUN)

    expect(parser.getWidth()).to.equal(36)
    expect(parser.getHeight()).to.equal(9)
    expect(parser.getPattern()).to.equal(
      '24bo$22bobo$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o$2o8bo3bob2o4bobo$10bo5bo7bo$11bo3bo$12b2o!'
    )
  })

  test('ignores comment lines', () => {
    const parser = new Parser(GLIDER_WITH_COMMENTS)

    expect(parser.getWidth()).to.equal(3)
    expect(parser.getHeight()).to.equal(3)
    expect(parser.getPattern()).to.equal('bo$2bo$3o!')
  })

  test('parses a pattern to array', () => {
    let parser = new Parser(BLOCK)

    expect(parser.getGrid()).to.deep.equal(BLOCK_GRID)

    parser = new Parser(GLIDER)
    expect(parser.getGrid()).to.deep.equal(GLIDER_GRID)
  })

  test('encode given grid to rle', () => {
    const parser = new Parser()
    expect(parser.encode(BLOCK_GRID)).to.equal(normalize(BLOCK))
    expect(parser.encode(GLIDER_GRID)).to.equal(normalize(GLIDER))
  })

  test('encoder breaks line after 70 character', () => {
    const parser = new Parser(GOSPER_GLIDER_GUN)
    const grid = parser.getGrid()
    expect(parser.encode(grid)).to.equal(normalize(GOSPER_GLIDER_GUN))
  })
})