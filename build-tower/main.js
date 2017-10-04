function towerBuilder(nFloors) {
  var arr = []
  var space = giveSpace(nFloors)
  for (var floor = 1; floor <= nFloors; floor++) {
    arr.push(renderFloor(floor, space))
  }
  return arr
}

function giveSpace(floors) {
  return floors * 2 - 1
}

function renderFloor(floor, space) {
  var arr = []
  var numberOfBlocks = floor * 2 - 1
  var numberOfSpaces = space - numberOfBlocks
  for (var i = 1; i <= numberOfBlocks; i++) {
    arr.push('*')
  }
  if (numberOfSpaces !== 0) {
    for (var j = 1; j <= (numberOfSpaces / 2); j++) {
      arr.push(' ')
      arr.unshift(' ')
    }
  }
  return arr.join('')
}
