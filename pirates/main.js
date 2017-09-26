const cannonsReady = (gunners) => {
  for (var gunner in gunners) {
    if (gunners[gunner] !== 'aye') {
      return 'Shiver me timbers!'
    }
  }
  return 'Fire!'
}
