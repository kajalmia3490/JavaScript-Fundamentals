// // class 01 learn: define a function
// function add(){
//     var a = 10
//     var b = 20
//     console.log(a+b)
// }

// // class 02 learn: invoke a function
// function sub(){
//     var value1 = 20
//     var value2 = 30
//     console.log(value1 + value2)
// }

// sub()

// // just use of function in loop
// function loopFunction(){
//     console.log('I am not rich man.')
// }
// for(var i = 0; i < 9; i++){
//     loopFunction()
// }

// // class 03 learn: function arguments and perameter
// // function of sub() method
// function sub(a, b){
//     var result = a - b
//     console.log(result)
// }
// sub(25, 18)

// // addition of some array to use of function 
// var arr1 = [2, 3, 5, 7]
// var arr2 = [11, 13, 17, 19]
// var arr3 = [23, 29]

// function add(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// add(arr1)
// add(arr2)
// add(arr3)

// // class 04 learn: return something from function
// function add(a, b){
//     var sumation = a + b
//     return {
//         sumation
//     }
// }
// var addition = add(22, 37)
// console.log(addition)

// function person(name, address, roll){
//     return{
//         name: name, address: address, roll: roll
//     }
// }
// var personData = person('Kajal', 'Bhairab, Kishorgonj', '478056')
// console.log(personData)

// // class o5 learn: function expression and define a different function 
// // like: [setTimeout(function(){
//     // statements
// // }, time:ms)] [law: 1000ms = 1s]
// var sdata = function(name, roll){
//     return{
//         name: name, roll: roll
//     }
// }
// // setTimeout function:
// var firstSms = 'I want to talk an word you!'
// var secondSms = 'actually, i like you since many days!'
// var thirdSms = 'so, i can\'t more late...!'
// var fourthSms = 'I LOVE YOU FOREVER!'

// setTimeout(function sms(){
//     console.log(firstSms)
// }, 5000) // [5000ms = 5s]
// setTimeout(function sms(){
//     console.log(secondSms)
// }, 8000)
// setTimeout(function sms(){
//     console.log(thirdSms)
// }, 11000)
// setTimeout(function sms(){
//     console.log(fourthSms)
// }, 14000)

// for(var i = 0; i; i++){
//     sms()
// }

// var ssdata = sdata('Kajal', '478056') // before all these, it has executed and output too.
// console.log(ssdata)

// // class 06 learn: inner function
// function firstFn(greetings, name){
//     function firstName(){
//         if(name){
//             return name.split(' ')[0]
//         } else {
//             return ' '
//         }
//     }
//     var message = greetings + ' ' + firstName()
//     console.log(message)
// }
// firstFn('How are you today!', 'Kajal Mia')

// // class 07 learn: function scoping
// function outerFn(n){
//     function innerFn(){
//         return n % 3 == 0
//     }
//     function innerFnOne(){
//         return n % 5 == 0
//     }
//     if(innerFn() && innerFnOne()){
//         console.log(n + ' is the divisible by 3 and 5')
//     } else {
//         console.log('Not a valid number!')
//     }
// }
// outerFn(40)

