// class 01 learn: loops.
// loops are three kinds of:
// 1. for loop
// 2. while loop
// 3. do while loop

// // class 02 learn: for loop.
// // even numbers addition:
// var starter = 1
// var diposit = 0
// for(starter; starter <= 100; starter += 2){
//     console.log(starter)
//     diposit = diposit + starter
// }
// console.log(diposit + ' is total number')

// // class 03 learn: while loop.
// var initializeNumber = 1
// var n = initializeNumber
// while(n <= 10){
//     if(n == 9)
//     console.log(n + ' May be it your lucky number')
//     n++
// }
// // now you print exponetial process using by while loop.
// var five = 1
// var fixedNumber = 5
// while(five <= 10){
//     console.log( fixedNumber + " * " + five + " = " + fixedNumber * five)
//     five++
// } 

// // class 04 learn: do while loop.
// var btn = false
// do{
//     console.log('It is working!')
// }while(btn)

// var btn1 = false
// do{
//     console.log('It is running!')
// }while(btn1)

// // class 05 learn: nested loop.
// var ln = 10
// var sn = 1
// var ssn = 1
// var outcome = ' '
// for(sn; sn <= ln; sn++){
//     for(ssn; ssn <= ln; ssn++){
//         outcome = outcome + ' ' + ssn
//         console.log(outcome)
//     }
// }

// // class 06 learn: break statement.
// var sln = 1
// for(sln; sln <= 20; sln++){
//     if(sln % 4 == 0){
//         break
//     }else{
//         console.log(sln)
//     }
// }

// // class 07 learn: continue statement.
// var sn = 1
// for(sn; sn <= 10; sn++){
//     if(sn == 3 || sn == 7){
//         continue
//     } else {
//         console.log(sn)
//     }
// }

// // class 08 learn: infinity for loop.
// var n = 1
// for(n; n; n++){
//     if(n == ''){
//         break
//     } else {
//         console.log(n)
//     }
// }