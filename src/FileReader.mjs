import fs from 'node:fs';

export class FileReader {
  read(path) {
    try {
      const content = fs.readFileSync(path, 'utf-8')
      return content
    } catch (err) {
      console.error(err)
    }
  }
}