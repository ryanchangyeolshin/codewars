const factorial = n => {
  var result = 1
  if (n > 0) {
    result = n * factorial(n-1)
  }
  return result
};
