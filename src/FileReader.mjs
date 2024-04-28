import fs from 'node:fs'

export class FileReader {
  static read(path) {
    try {
      const content = fs.readFileSync(path, 'utf-8')
      return content.trim()
    } catch (err) {
      console.error(err)
    }
  }
}