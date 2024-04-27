import { describe, test } from "vitest";
import { expect } from "chai";
import { Game } from "../src/Game.mjs";
import { normalize } from "./utils.mjs";

describe('itegration test the game', () => {
  const blockPath = './test/rle/block.rle'

  test('starting the game without config prints help', () => {
    const game = new Game(blockPath, 3)
    expect(game.toString()).to.equal(normalize(
      `XX
       XX`
    ))
    game.run()
    expect(game.toString()).to.equal(normalize(
      `XX
       XX`
    ))
  })
})