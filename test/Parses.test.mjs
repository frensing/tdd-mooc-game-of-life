import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Parser } from "../src/Parser.mjs";

describe('Parser', () => {
  test('can extract width and height from rle', () => {
    const parser = new Parser(
      `x = 3, y = 3
      bo$2bo$3o!`
    )
    expect(parser.getWidth()).to.equal(3)
    expect(parser.getHeight()).to.equal(3)
  })
})