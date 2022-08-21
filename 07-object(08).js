// // class 01 learn: 0bject declaration (leteral and constructor)
// // system of leteral:
// var numbers = {
//     a: 45, b: 56
// }
// numbers.c = 63
// console.log(numbers)

// var prime = {}
// prime.x = 2
// prime.y = 3
// console.log(prime)

// // system of constructor:
// var phoneNumber = Object()
// phoneNumber = {s: 34, p: 43}
// console.log(phoneNumber)

// var bit = new Object()
// bit.m = 99
// bit.n = 73
// console.log(bit)

// // class 02 learn: access object properties
// // Dot(.) notation:
// var number = {
//     e: 39, f: 41, g: 47
// }
// console.log(number.e)
// console.log(number.f + number.g)

// // Array[''] notation:
// var someCollect = {
//     sl_one: 'kajal', sl_two: 'sajal', sl_three: 'emon'
// }
// console.log(someCollect['sl_two'])
// var unlock = 'sl_one'
// console.log(someCollect[unlock])

// // class 04 learn: data update (setting)
// var serialNumber = {
//     first: 478056, second: 478057, third: 345055
// }
// console.log(serialNumber)
// serialNumber.first = 478130
// console.log(serialNumber)

// // class 05 learn: remove object properties
// var someData = Object()
// someData = {
//     Name: 'Kajal', Roll: 478056, Department: 'Computer', Shift: '2nd', section: 'A'
// }
// console.log(someData)
// delete someData.Shift
// delete someData.section
// console.log(someData)

// // class 06 learn: comparing two object
// var point = {
//     first: 3.90, second: 3.89
// }
// var pointOne = {
//     first: 3.90, second: 3.89
// }
// if(point.first == pointOne.first){
//     console.log(true)
// } else {
//     console.log(false)
// }
// console.log(JSON.stringify(point) == JSON.stringify(pointOne))

// // class 07 learn: iterate object properties
// // now write a program that is the properties in this object?
// var person = {
//     names: 'kajal', roll: 478056, dpt: 'computer'
// }
// console.log('roll' in person)

// for(var i in person){
//     console.log(i + ': ' + person[i])
// }

// // class 08 learn: object built in methods and object to object create
// var patienceData = {
//     names: 'kajal', bedNo: 56, bloodGroup: 'A+'
// }
// console.log(Object.keys(patienceData))
// console.log(Object.values(patienceData))
// console.log(Object.entries(patienceData))
// console.log(patienceData)

// // object to object copied and created a new object
// var donner = Object.assign({}, patienceData)
// delete donner.bedNo
// donner.names = 'sajal'
// donner.address = 'Bhairab, Kishoregonj'
// console.log(donner)
