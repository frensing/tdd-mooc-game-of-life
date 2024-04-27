import { describe, test } from "vitest";
import { expect } from "chai";
import { Game } from "../src/Game.mjs";
import { normalize } from "./utils.mjs";

describe('itegration test the game', () => {
  const blockPath = './test/rle/block.rle'
  const blinkerPath = './test/rle/blinker.rle'

  test('the game initializes and runs', () => {
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

  test('the game runs multiple generations', () => {
    const game = new Game(blinkerPath, 3)
    expect(game.toString()).to.equal(normalize(
      `...
       XXX
       ...`
    ))
    game.run()
    expect(game.toString()).to.equal(normalize(
      `.X.
       .X.
       .X.`
    ))
  })
})