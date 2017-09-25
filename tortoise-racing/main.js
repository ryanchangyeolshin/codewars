function race(v1, v2, g) {
  if (v2 < v1) { return null; }

  var seconds = Math.floor(g / (v2 - v1) * 3600);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds - h * 3600) / 60);
  var s = seconds - h * 3600 - m * 60;

  return [h, m, s];
}
