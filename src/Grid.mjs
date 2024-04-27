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

    this.grid.forEach((row, y) => {
      row.forEach((_, x) => {
        const neigh = this.#countNeighbors(x, y)
        if (neigh < 2) {
          newGrid[y][x] = false
        } else if (neigh == 2 || neigh == 3) {
          newGrid[y][x] = true
        }
      })
    });

    this.grid = newGrid
  }

  #countNeighbors(x, y) {
    let s = 0
    for (let i = Math.max(y-1, 0); i <= Math.min(y+1, this.height-1); i++) {
      for (let j = Math.max(x-1, 0); j <= Math.min(x+1, this.width-1); j++) {
        if (i == y && j == x) { continue }
        if (this.grid[i][j]) {
          s += 1
        }
      }
    }
    return s
  }

  toString() {
    return this.grid.map(row => row.map(x => x ? 'X' : '.').join('')).join('\n')
  }

  #newGrid() {
    return Array.from(Array(this.height), () => Array(this.width).fill(false))
  }
}
