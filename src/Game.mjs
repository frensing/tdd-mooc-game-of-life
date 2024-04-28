import { Parser } from "./Parser.mjs"
import { FileReader } from "./FileReader.mjs"
import { Grid } from "./Grid.mjs"

export class Game {
  constructor(path, generations) {
    this.generations = generations
    this.path = path

    const rle = FileReader.read(path)

    this.parser = new Parser(rle)
    this.grid = new Grid(
      this.parser.getWidth(), 
      this.parser.getHeight(),
      this.parser.getGrid()
    )
  }

  run() {
    for (let i = 0; i < this.generations; i++) {
      this.grid.tick()
    }
  }

  toString() {
    return this.grid.toString()
  }
}