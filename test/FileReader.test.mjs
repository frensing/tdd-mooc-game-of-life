import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { FileReader } from "../src/FileReader.mjs";
import { normalize } from "./utils.mjs";

const BLOCK = 
  `x = 2, y = 2
   2o$2o!`

describe('FileReader', () => {
  const blockPath = './test/rle/block.rle'

  test('can open a file from a path', () => {
    const reader = new FileReader()
    expect(reader.read(blockPath)).to.equal(normalize(BLOCK))
  })
})