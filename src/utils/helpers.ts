
export const removeOtherCharacters = (str:string) => {
  return str.replace(/[^a-zA-Z0-9]/g, '')
}

export const formatPlate = (str:string) => {
  const strClean = removeOtherCharacters(str).toUpperCase()
  if (strClean.length >= 4) {
    return `${strClean.substring(0, 3)}-${strClean.substring(3)}`
  }
  return strClean
}
