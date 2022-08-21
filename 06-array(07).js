// // class 01 learn: array declaration
// var sn = [0,1,2,3,4,5,6,7,8,9,10]
// sn[10] = 56 //replaceNumber
// console.log(sn)
// var newSn = sn[5] + sn[6] // addition by array index
// console.log('The result is: ' + newSn) 

// // class 02 learn: array traversing
// var someValue = [56, 80, 61, 55, 16]
// var sum = 0
// for(var i = 0; i < someValue.length; i++){
//     if(someValue[i] % 2 == 1){
//         sum += someValue[i]
//         console.log(someValue[i])
//     }
// }
//     console.log('The result is: ' + sum)

//     var serialNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     var sum = 0
//     var i = 0
//     for(i; i < serialNumber.length; i++){
//         if(serialNumber[i] % 2 == 0){
//             sum += serialNumber[i]
//             console.log(serialNumber[i])
//         } else {
//             continue
//         }
//     }
//     console.log('Addition of all even number: ' + sum)

// // class 03 learn: Insert, Remove, Replace
// var primeNumber = [3, 5, 7, 11, 13, 17, 19]
// console.log('all elements: ' + primeNumber)// all elements print

// primeNumber.push(23)// The element insert to last-index in array  
// console.log('\ninsert to last-index: ' + primeNumber)

// primeNumber.pop()// The element remove to last-index in array
// console.log('\nremove to last-index: ' + primeNumber)

// primeNumber.unshift(2)// The element insert to zero-index in array
// console.log('\ninsert to zero-index: ' + primeNumber)

// primeNumber.shift()// The element remove to zero-index in array
// console.log('\nremove to zero-index: ' + primeNumber)

// // null and undefined
// primeNumber[3] = undefined
// console.log(primeNumber)
// primeNumber[5] = null
// console.log('\n' + primeNumber)

// // Now we will use of method right way
// primeNumber.splice(3, 0, 31, 37) // insertation in array
// console.log(primeNumber)
// primeNumber.splice(5, 4) // removable in array
// console.log(primeNumber)

// primeNumber[4] = 41 // replace element in array 
// console.log(primeNumber)

// primeNumber.splice(3, 3, 51, 53, 57, 59)// update element in array
// console.log('Update number: ' + primeNumber)

// // class 04 learn: search in array
// var rollNumber = [23, 8, 5, 3, 6, 22, 16, 10, 2, 3]
// var find = 10
// var i = 0
// for(i; i <= rollNumber.length; i++){
//     if(rollNumber[i] == find){
//         console.log('Found at index number: ' + i)
//         break
//     } else {
//         continue
//     }
// }

// // class 05 learn: multidimensional array
// // two dimensional array
// var primeNumber = [
//     [2, 3, 5, 7], 
//     [11, 13, 17, 19]
// ]
// var i, j, prime
// prime = primeNumber.length
// for(i = 0; i <= prime; i++){
//     for(j = 0; j <= prime[i]; j++){
//     }
// }
// console.log(primeNumber)
// console.log(primeNumber[1])

// // class 06 learn: reverse in array
// var pn = [71, 73, 79]
// console.log(pn.reverse())

// // another way reverse in array:
// var specialNumber = [91, 93, 95, 97]
// var i = specialNumber.length-1
// for(i; i >= 0; i--){
//     console.log(specialNumber[i])
// }

// // class 07 learn: important array methods
// var sl = [2, 3, 5, 7]
// var pl = [2, 3, 5, 7]
// var s = 'kajal'
// var newArray = sl.concat(pl)
// console.log(sl.join(' | '))
// console.log(sl.fill(true))
// console.log(newArray)
// console.log(Array.isArray(s))
// var ss = [1, 2, 3, 4, 5]
// var arr = Array.from(ss)
// console.log(ss)
// arr[0] = 5
// console.log(arr)