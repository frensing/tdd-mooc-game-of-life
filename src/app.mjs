import { Game } from "./Game.mjs"

if (process.argv.length != 4) {
  console.log('Please provide a rle file path and the number of generations')
  console.log('Format: node app.mjs [path-to-rle] [generations]')
  process.exit()
}

const path = process.argv[2]
const generations = parseInt(process.argv[3])

const game = new Game(path, generations)
game.run()

console.log(game.toRle())
