
export const removeOtherCharacters = (str:string) => {
  return str.replace(/[^a-zA-Z0-9]/g, '')
}

export const onlyNumericCharacters = (str:string) => {
  return str.replace(/[^0-9]/g, '')
}

export const onlyLetterCharacters = (str:string) => {
  return str.replace(/[^A-Z]/g, '')
}

export const formatPlate = (str:string) => {
  const strClean = removeOtherCharacters(str).toUpperCase()
  if (strClean.length >= 4) {
    const firstPart = onlyLetterCharacters(strClean.substring(0, 3))
    const secondPart = onlyNumericCharacters(strClean.substring(3))
    return `${firstPart}-${secondPart}`.substring(0, 8)
  }
  return onlyLetterCharacters(strClean)
}
