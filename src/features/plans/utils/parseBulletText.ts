// Splits a plan description into a bold leading phrase and the rest.
// Depends on the current rimac-front-end-challenge API format where descriptions
// are plain strings like "Médico general hasta 3 consultas por año". If the API
// changes the structure of the `description` array, revisit the split patterns.
// Priority order matters: more specific patterns before generic ones.
const SPLIT_PATTERNS = [
  ' cubiertos',
  ' derivados',
  ' para ',
  ' por ',
  ' de S',       // "de S/300"
  ' de un ',     // "de un día"
  ' de manera',
  ' en el ',
  ' en centros',
]

export const parseBulletText = (text: string): { bold: string; rest: string } => {
  for (const pattern of SPLIT_PATTERNS) {
    const idx = text.indexOf(pattern)
    if (idx > 5) {
      return { bold: text.slice(0, idx), rest: text.slice(idx) }
    }
  }
  // Last resort: split on " y " only when the bold part is long enough
  const yIdx = text.indexOf(' y ')
  if (yIdx >= 10) {
    return { bold: text.slice(0, yIdx), rest: text.slice(yIdx) }
  }
  return { bold: text, rest: '' }
}
