export function normalize(s) {
  return s.split('\n').map(x => x.trim()).join('\n') + '\n'
}