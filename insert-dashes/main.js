function insertDash(num) {
   var array = num.toString().split('').map(Number)
   var newArr = []
   for (var i = 0; i < array.length - 1; i++) {
     if(array[i] % 2 !== 0 && array[i + 1] % 2 !== 0) {
       newArr.push(array[i])
       newArr.push('-')
     }
     else {
       newArr.push(array[i])
     }
   }
   newArr.push(array[array.length - 1])
   return newArr.join('')
}

function insertDash2(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

console.log(insertDash(121341349))
console.log(insertDash(5555))
console.log(insertDash(22222222))
