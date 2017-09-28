function getCoordAndDir(arr) {
  var newArr = []
  var coord = [0, 0]
  var coordTwo = [0, 0]
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'NORTH':
        coord[1] += 1
        break;
      case 'SOUTH':
        coord[1] -= 1
        break;
      case 'EAST':
        coord[0] += 1
        break;
      case 'WEST':
        coord[0] -= 1
        break;
    }
    if (coordTwo === coord && (coord[0] === 0 || coord[1] === 0)) {
      newArr = []
      coordTwo = coord
    }
    else {
      newArr.push(arr[i])
      coordTwo = coord
    }
    console.log(coord, newArr, coordTwo)
  }
}

// ['EAST', 'SOUTH']
getCoordAndDir(['WEST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'SOUTH', 'WEST', 'EAST', 'SOUTH', 'NORTH'])
