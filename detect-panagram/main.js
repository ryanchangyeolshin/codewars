function isPangram(string){
  var str = string.replace(/ /g, '').toLowerCase()
  return containsAlphabets(str)
}

function containsAlphabets(string) {
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < alphabets.length; i++) {
    if (!string.includes(alphabets[i])) {
      return false
    }
  }
  return true
}
