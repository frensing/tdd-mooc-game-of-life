export class Parser {
  constructor(s) {
    this.parse(s)
  }

  parse(s) {
    let lines = s.split('\n')
    lines = lines.filter(line => line[0] != '#')

    const header = new Map(
      lines[0].trim()
        .split(', ')
        .map(x => x.split(' = '))
    )

    this.width = parseInt(header.get('x'))
    this.height = parseInt(header.get('y'))

    this.pattern = lines.slice(1).map(x => x.trim()).join('')
  }

  getGrid() {
    const re = /(\d*)([bo])/g

    const grid = Array.from(Array(this.getHeight()), () => Array(this.getWidth()).fill(false))

    let rows = this.getPattern().slice(0, -1).split('$')
    rows.forEach((row, y) => {
      let x = 0

      const matches = row.matchAll(re)
      for (const match of matches) {
        const n = parseInt(match[1])
        const c = match[2]

        if (c == 'o') {
          for (let i = 0; i < x + n; i++) {
            grid[y][x+i] = true
          }
        }
        x += n
      }
    });
    return grid
  }

  getWidth() {
    return this.width
  }

  getHeight() {
    return this.height
  }

  getPattern() {
    return this.pattern
  }
}
