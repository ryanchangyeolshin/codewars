function foldTo(distance) {
var thickness = 0.0001
var count = 0
  if (distance <= 0) {
    return null
  }
  while (thickness < distance) {
    thickness *= 2
    count++
  }
  return count
}
