import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Parser } from "../src/Parser.mjs";

const GLIDER =  
  `x = 3, y = 3
   bo$2bo$3o!`

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
})