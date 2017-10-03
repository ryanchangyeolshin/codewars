function multiplicationTable(row,col){
  var arr = []
  for (var i = 1; i <= row; i++) {
    arr.push(renderRow(i, col))
  }
  return arr
}

function renderRow(index, col) {
  var arr = []
  var i = 1
  var j = index
  while (i <= col) {
    arr.push(j)
    i++
    j+=index
  }
  return arr
}
