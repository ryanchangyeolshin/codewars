function solve(s) {
  var newS = s.replace(/[aeiuo]/g, ' ').split(' ').join(' ')

  return calcValue(newS).reduce(function (a, b) {
    return Math.max(a, b)
  })
};

function calcValue(str) {
  var arr = []
  var value = 0
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      value = 0
    }
    for (var j = 0; j < alphabets.length; j++) {
      if (str[i] === alphabets[j]) {
        value += (j + 1)
      }
    }
    arr.push(value)
  }
  return arr
}

console.log(solve('zodiac')) // 26
console.log(solve('strength')) // 57
