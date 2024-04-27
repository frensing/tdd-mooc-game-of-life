export class Parser {
  constructor(s) {
    if (s) {
      this.parse(s)
    }
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

  encode(grid) {
    const width = grid[0].length
    const height = grid.length
    const header = this.encodeHeader(width, height)
    const pattern = this.encodePattern(grid)

    return `${header}\n${pattern}\n`
  }

  encodeHeader(width, height) {
    return `x = ${width}, y = ${height}`
  }

  encodePattern(grid) {
    let pattern = ''

    grid.forEach(row => {
      let lastCell = row[0]
      let n = 1
      for (let i = 1; i < row.length; i++) {
        let c = row[i]
        if (c != lastCell) {
          pattern += (n == 1 ? '' : n) + (lastCell ? 'o' : 'b')
          n = 1
          lastCell = c 
        } else {
          n += 1
        }
      }
      if (lastCell) {
        pattern += (n == 1 ? '' : n) + 'o'
      }
      pattern += '$'
    })

    pattern = pattern.slice(0, -1) + '!'

    return pattern
  }

  getGrid() {
    const re = /(\d*)([bo])/g

    const grid = Array.from(Array(this.getHeight()), () => Array(this.getWidth()).fill(false))

    let rows = this.getPattern().slice(0, -1).split('$')
    rows.forEach((row, y) => {
      let x = 0

      const matches = row.matchAll(re)
      for (const match of matches) {
        const n = parseInt(match[1] ? match[1] : 1)
        const c = match[2]

        if (c == 'o') {
          for (let i = x; i < x + n; i++) {
            grid[y][i] = true
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
