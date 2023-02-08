export function capitalizeFirstLetter(string: string): string {
  if (!string || typeof string !== 'string') {
    /* throw new Error("Input must be a non-empty string."); */
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
