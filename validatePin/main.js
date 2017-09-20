function validatePIN (pin) {
  var numericRegex = /^[0-9]+$/
  if (pin.length === 4 || pin.length === 6) {
    if (pin.match(numericRegex)) {
      return true
    }
  }
  return false
}
