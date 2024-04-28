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
      row.forEach((cell, x) => {
        const neigh = this.#countNeighbors(x, y)
        if (neigh < 2) {
          newGrid[y][x] = false
        } else if (cell && (neigh == 2 || neigh == 3)) {
          newGrid[y][x] = true
        }
      })
    })

    this.grid = newGrid
  }

  #countNeighbors(X, Y) {
    let s = 0
    for (let y = Math.max(Y-1, 0); y <= Math.min(Y+1, this.height-1); y++) {
      for (let x = Math.max(X-1, 0); x <= Math.min(X+1, this.width-1); x++) {
        if (x == X && y == Y) { continue }
        if (this.grid[y][x]) {
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
