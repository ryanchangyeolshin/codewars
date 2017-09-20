function minMax(arr) {
  var done = false
  var swap = null
  while (!done) {
    done = true
    for (var i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false
        swap = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = swap
      }
    }
  }
  return [arr[0], arr[arr.length - 1]]
}
