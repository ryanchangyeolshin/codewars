function findUniq(arr) {
  var arr2 = arr.sort()
  if (arr2[0] !== arr2[1]) {
    return arr2[0]
  }
  return arr2[arr2.length - 1]
}

console.log(findUniq([1,1,1,1,1,1,1,1,2,1,1,1,1,1,1]))
console.log(findUniq([1,3,1,1,1,1,1]))
console.log(findUniq([5,3,3,3,3,3,3]))
