import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Parser } from "../src/Parser.mjs";

const GLIDER =  
  `x = 3, y = 3
   bo$2bo$3o!`

const GLIDER_WITH_COMMENTS = 
  `#C This is a glider.
   x = 3, y = 3
   bo$2bo$3o!`

const GOSPER_GLIDER_GUN = 
  `x = 36, y = 9, rule = B3/S23
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
})