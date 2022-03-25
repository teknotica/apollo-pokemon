export const capitalise = (text: string) => {
  if (!text) {
    return ''
  }

  return text.slice(0, 1).toUpperCase() + text.slice(1)
}