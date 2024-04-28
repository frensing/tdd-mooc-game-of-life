import { describe, test } from "vitest";
import { expect } from "chai";
import { Game } from "../src/Game.mjs";
import { normalize } from "./utils.mjs";

describe('integration test the game', () => {
  const blockPath = './test/rle/block.rle'
  const generations = 3

  test('run game', () => {
    const game = new Game(blockPath, generations)
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