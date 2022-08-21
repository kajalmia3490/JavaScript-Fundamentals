// // class 01 learn: logic and condition.
// i) if condition 
// ii) else condition 
// iii) else if condition 
// iv) switch statement 

// // class 02 learn: if condition.
// var readinghrs = 12
// var writinghrs = 4
// if(writinghrs > readinghrs){
//     console.log('you are a writer')
// }
// if(readinghrs > writinghrs){
//     console.log('you are a reader')
// }
// var cgpaKarim = 3.46
// var cgpaRahim = 3.49
// var allowCgpa = 3.50
// if(cgpaKarim >= allowCgpa){
//     console.log('You are allow')
// }
// if(cgpaKarim <= allowCgpa){
//     console.log('you are not allow')
// }
 
// // class 03 learn: else condition.
// var firstNumber = 34
// var secondNumber = 45
// if(firstNumber % 2 == 0){
//     console.log('This is an even number')
// }else{
//     console.log('This is an odd number')
// }
// //another
// if(secondNumber % 2 == 0){
//     console.log('This is an even number')
// }else{
//     console.log('This is an odd number')
// }

// // class 04 learn: else if condition.
// var electricityBill = 4000
// var wifiBill = 500
// var rechargeBill = 2000
// if(electricityBill > wifiBill){
//     console.log(electricityBill + 'tk. electricity bill is the highest amount')
// }else if(wifiBill > rechargeBill){
//     console.log(wifiBill + 'tk. wifi bill is the highest amount')
// }else{
//     console.log(rechargeBill + 'tk. recharge bill is the highest amount')
// }

// //say example: use of if-else condition.
// var date = new Date()
// var today = date.getDay()
// if(today == 0){
//     console.log('Today is Sunday')
// }else if(today == 1){
//     console.log('Today is Monday')
// }else if(today == 2){
//     console.log('Today is Tuesday')
// }else if(today == 3){
//     console.log('Today is Wednesday')
// }else if(today == 4){
//     console.log('Today is Thursday')
// }else if(today == 5){
//     console.log('Today is Firday')
// }else if(today == 6){
//     console.log('Today is Saturday')
// }else{
//     console.log('Invalid Number!')
// }

// // class 05 learn: switch statement.
// var date = new Date()
// var month = date.getMonth()
// switch(month){
//     case 0:
//         console.log('This month name is January')
//         break
//     case 1:
//         console.log('This month name is February')
//         break
//     case 2:
//         console.log('This month name is March')
//         break
//     case 3:
//         console.log('This month name is April')
//         break
//     case 4:
//         console.log('This month name is May')
//         break
//     case 5:
//         console.log('This month name is June')
//         break
//     case 6:
//         console.log('This month name is July')
//         break
//     case 7:
//         console.log('This month name is August')
//         break
//     case 8:
//         console.log('This month name is September')
//         break
//     case 9:
//         console.log('This month name is Octeber')
//         break
//     case 10:
//         console.log('This month name is November')
//         break
//     case 11:
//         console.log('This month name is December')
//         break
//     default:
//         console.log('Invalid Number!')
// }

// // class 06 learn: logical operatior.
// var aAge = 20
// var bAge = 22
// var cAge = 35
// var dAge = 16
// if(aAge < bAge && cAge > dAge){
//     console.log('kajal is their father')
// } else {
//     console.log('other person is their father')
// }
// //Next
// if(aAge > bAge || cAge > dAge){
//     console.log('rahim is your father')
// }else {
//     console.log('rahim is not your father')
// }
// //Next...other process.
// var notOperator = aAge > bAge
// if(notOperator == 1){
//     console.log('repeat your work')
// }else{
//     console.log('not a repeat')
// }
// // Next
// var checkOperator = !(aAge < bAge)
// console.log(checkOperator)

// // class 07 learn: ternary operator.
// var land = 23
// var height = 15
// var outcome = land > height ? 'The highest value: ' + land : 'The highest value: ' +  height
// console.log(outcome)

// // class 08 learn: AND , OR operators.
// // OR
// var userName = ''
// var name = userName || 'unknown name'
// console.log(name)
// // AND
// var password = true
// password && console.log('you can access now.')
// var password = false
// password && console.log('you cannot access yet.')