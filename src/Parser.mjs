export class Parser {
  constructor(s) {
    this.parse(s)
  }

  parse(s) {
    const lines = s.split('\n')

    const header = new Map(lines[0].split(', ').map(x => x.split(' = ')))

    this.width = parseInt(header.get('x'))
    this.height = parseInt(header.get('y'))
  }

  getWidth() {
    return this.width
  }

  getHeight() {
    return this.height
  }
}