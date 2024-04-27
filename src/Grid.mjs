export class Grid {
  grid

  constructor(width, height) {
    this.grid = Array.from(Array(height), () => Array(width).fill(false))
  }

  toString() {
    return this.grid.map(row => row.map(x => x ? 'X' : '.').join('')).join('\n') + '\n'
  }
}
