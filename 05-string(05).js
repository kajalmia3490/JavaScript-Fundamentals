// // class 01 learn: string literal vs string constructor.
// var name = 'kajal mia'// string literal
// var str = String('something') // string constructor
// console.log(str)// no: one way
// console.log(name.toString())// no: two way

// var digit = 100// number
// var str2 = digit + '' // number to string
// console.log(str2)// output way

// // class 02 learn: escape notation
// var str = 'I\'m Kajal Mia.'
// var str2 = 'How are you? \nI\'m fine. And you?'
// var str3 = 'you stay far \tfrom to me.'
// var str4 = 'What\'s your name\\not game?'
// console.log(str + '\n' + str2 + '\n' + str3 + '\n' + str4)

// // class 03 learn: two string comparison.
// var s = 'kajal'
// var s2 = 'Fires'
// console.log(s > s2)
// // string and numbers combination:
// console.log('365' == 365)

// // class 04 learn: built in string methods
// var names = 'Abdur Rahman '
// var address = 'Dhaka, Bangladesh'
// var cn = names + address
// console.log(cn.charAt(13))
// console.log(cn.toUpperCase())
// console.log(cn.toLowerCase())
// console.log(cn.startsWith())
// console.log(cn.endsWith())
// console.log(cn.substring())
// console.log(cn.trim())
// console.log(cn.concat())

// // class 05 learn: string length
// var fullName = 'Atiqur Rahman Kajal'
// var length = 0
// while(true){
//     if(fullName.charAt(length) == ''){
//         break
//     } else {
//         length++
//     }
// }
// console.log(length) // logical way

// console.log(fullName.length) // simple method way