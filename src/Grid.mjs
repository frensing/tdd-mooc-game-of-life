export class Grid {
  grid

  constructor(width, height, initGrid) {
    this.width = width
    this.height = height
    if (initGrid && initGrid.length == height && initGrid[0].length == width) {
      this.grid = initGrid
    } else {
      this.grid = this.#newGrid()
    }
  }

  tick() {
    const newGrid = this.#newGrid()

    this.grid = newGrid
  }

  toString() {
    return this.grid.map(row => row.map(x => x ? 'X' : '.').join('')).join('\n')
  }

  #newGrid() {
    return Array.from(Array(this.height), () => Array(this.width).fill(false))
  }
}
