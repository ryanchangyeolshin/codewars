function capitalize(s,arr) {
  s = s.split('')
  var index = null
  for (var i = 0; i < arr.length; i++) {
    index = arr[i]
    if (index < s.length) {
      s[index] = s[index].toUpperCase()
    }
  }
  return s.join('')
};
