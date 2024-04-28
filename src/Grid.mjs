export class Grid {
  grid

  constructor(width, height, initGrid) {
    if (initGrid && initGrid.length == height && initGrid[0].length == width) {
      this.grid = initGrid
    } else {
      this.grid = Array.from(Array(height), () => Array(width).fill(false))
    }
  }

  toString() {
    return this.grid.map(row => row.map(x => x ? 'X' : '.').join('')).join('\n')
  }
}
