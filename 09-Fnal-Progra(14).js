// // class 01 learn: pure function
// // rule no: 01 in pure function
// // it returns the same result, if given the same arguments, then it called this pure function.
// function squareFn(a){
//     return a * a
// }
// console.log(squareFn(144))
// console.log(squareFn(144))
// console.log(squareFn(144))
// console.log(squareFn(144))

// // rule no: 02 in pure function
// //it does not cause any observeable side effects
// var a = 12
// var sum = a + a
// console.log(sum)

// // class 02 learn: first class function
// // first class always depend on six rules. like as:
// //1. A function can be stored in a variable
// //2. ...in an array
// //3. ...in an object
// //4. We can create function as need
// //5. ...pass function as an arguments
// //6. ...return function from another function

// // stored in a variable
// function mathsFn(a, b){
//     var mathsResult = a + b
//     return mathsResult
// }
// // console.log(mathsFn(4, 2))
// var newResult = mathsFn
// console.log(typeof(newResult))
// console.log(newResult(45, 55))

// // stored in an array
// var arr = []
// arr.push(mathsFn)
// console.log(typeof(arr))
// console.log(arr[0](9, 13))

// // stored in an object
// var obj = {
//     copyObj: mathsFn
// }
// console.log(typeof(obj))
// console.log(obj.copyObj(3, 7)) 

// // create function as need
// setTimeout(function msg(){
//     console.log('I will do hardworking!')
// }, 5000)
// // note book: function to function, inner function, declare multiple function at once
// // like as: 
// function add(a, b){
//     function subAdd(){
//         var sum = a + b
//         console.log(sum)
//     }
//     subAdd()
// }
// add(2, 7)// this is called inner function

// // class 03 learn: higher order function 
// function add(a, b){
//     var sum = a + b
//     return sum
// }
// function subAdd(a, b, fn){
//     function subAdds(){
//         var as = fn(a, b)
//         return a * b * as
//     }
//     return subAdds()
// }
// var subAdds = subAdd(3, 4, add)
// console.log(subAdds)

// // class 04 learn: first look at closure
// var number = 2
// function num(){
//     console.log(number)
// }
// num()
// function xyz(){
//     var ab = 9
//     return function abc(){
//         console.log(ab)
//     }
// }
// xyz()
// console.dir(xyz)

// // class 04 learn: callback function
// function sample(a, b){
//     c = a + b
//     d = a - b
//     var result = sum(c, d)
//     return result
// }
// function sum(a, b){// addition
//     return a + b
// }
// console.log(sample(5, 8))

// var result2 = sample(5, 8, function(c, d){// call back function with sub
//     return a - c
// })
// console.log(result2)

// var result3 = sample(51, 8, function(c, d){ // call back divider
//     return a / b
// })
// console.log(result3)

// var result4 = sample(55, 8, function(c, d){// call back exponential
//     return a * b
// })
// console.log(result4)

// // class 05 learn: array traversing use of function and implementation of forEach()
// var arr = [2, 3, 5, 7]
// // arr.forEach(function(value, index, arr){
// //     var sum = sum + value
// //     return sum
// // })
// // console.log(arr)
// var sumation = 0
// function array(arr){
//     for(var j = 0; j < arr.length; j++){
//         console.log(arr[j])
//         sumation += arr[j]
//     }
// }
// array(arr)
// console.log(sumation)

// // class 06 learn: map() function and implementation
// // this solution is without use of map implementation
// var someArrayData = [2, 3, 5, 7]
// var result = 0
// var sumation = 0
// var newDataCreate = someArrayData.map(function(value, index, number){
//     return value * value
// })
// console.log(someArrayData)
// console.log(newDataCreate)

// // this solution is with use of map implementation
// var arrayData = [1, 3, 5, 7, 9]
// var combineData = 0
// var resultData = 0

// function mapData(arrayData){
//     var newArrayData = []
//     for(var i = 0; i < arrayData.length; i++){
//         combineData = arrayData[i] * arrayData[i]
//         newArrayData.push(combineData)
//     }
//     return newArrayData
// }
// console.log(arrayData)
// console.log(mapData(arrayData))

// class 07 learn: implement filter function.
// var randomData = [13, 21, 74, 5, 34, 97, 63];
// var filteredData = randomData.filter(function(value){
//     return value % 2 == 0;
// })
// console.log(filteredData)

// var userData = [2, 3, 5, 7, 1, 2, 4, 5, 6, 8];
// function filtering(userData){
//     var emptyData = []
//     for(var k = 0; k < userData.length; k++){
//         if(userData[k] % 2 == 0){
//             emptyData.push(userData[k])
//         }
//     }
//     return emptyData;
// }
// console.log(filtering(userData));

// // class 08 learn: implementation reduce function
// // maximum value determination use to reduce function
// var vipData = [2, 4, 6, 8, 10];
// var sumation;
// var additionValue = vipData.reduce(function(prev, curr){
//     return sumation =  prev + curr;
// })
// console.log(sumation);

// var maxValue = vipData.reduce(function(prev, curr){
    // return Math.max(prev, curr);
// })
// console.log(maxValue);

// class 09 learn: find and find index function 
// find() function
// var userInfo = [77, 55, 83, 26, 39, 42, 10];
// var newInfo = userInfo.find(function(value){
//     return value == 83;
// })
// console.log("The value is got it: ", newInfo);

// // findIndex() function
// var usersInfo = [77, 55, 83, 26, 39, 42, 10];
// var newsInfo = usersInfo.findIndex(function(value){
//     return value == 83;
// })
// console.log("The value is got it: ", newsInfo);

// // implementation of find and findIndex
// var usersInfo = [77, 55, 83, 26, 39, 42, 10];
// function myFindData(usersInfo, cb){
//     for(var indexNumber = 0; indexNumber < usersInfo.length; indexNumber++){
//         if(cb(usersInfo[indexNumber])){
//             return usersInfo[indexNumber];
//         }
//     }
// }
// var implementationData = myFindData(usersInfo, function(value){
//     return value == 26;
// })
// console.log(implementationData);

// // write a program that inchi to feet convert
// function dataConvert(mile){
//     return mile * 1.60934;
// }
// console.log(dataConvert(621.375));

// // class 10 learn: sort, some and every function
// // use of sort() method with accending
// var items = [1, 4, 0, 4, 9, 7, 5, 3, 6, 8];
// items.sort();
// console.log(items);
// // use of sort() method with diccending
// var newItems = items.sort(function(a, b){
//     if(a > b){
//         return -1;
//     }
//     else if(a < b){
//         return 1;
//     }
//     else{
//         return 0;
//     }
// })
// console.log(newItems);
// // use of every() method
// var dataItems = [8, 2, 4, 10, 30, 70, 50, 90]; 
// var newDataItems = dataItems.every(function(value){
//     return value % 2 == 0;
// })
// console.log(newDataItems);
// // use of some() method
// var newItem = dataItems.some(function(value){
//     return value % 2 == 1;
// })
// console.log(newItem);
// var persons = [
//     {
//         name: "pen",
//         age: 5
//     },
//     {
//         name: "book",
//         age: 3
//     },
//     {
//         name: "mobile",
//         age: 0.5
//     }
// ];
// var peoples = persons.sort(function(a, b){
//     if(a.age > b.age){
//         return 1;
//     }
//     else if(a.age < b.age){
//         return -1;
//     }
//     else{
//         return 0;
//     }
// })
// console.log(peoples);

// // max/min value return with function
// var arrs = [2, 1, 9, 4, 9, 45, 0];
// var newArrs = arrs.reduce(function(prev, curr){
//     return Math.max(prev, curr);
// })
// console.log(newArrs);
// // following the another way
// console.log(Math.min(...arrs));

// // class 11 learn: return a function from another function
// // function parentFn(msg){
// //     function childFn(name){
// //         return msg + ', ' + name + '!';
// //     }
// //     return childFn;
// // }
// // var gm = parentFn('Good Morning...');
// // var allMsg = gm('Atiqur Rahman Kajal');
// // console.log(allMsg);

// // implementation of power function
// function base(b){
//     function power(n){
//         var result = 1;
//         for(var i = 0; i < b; i++){
//             result *= n;
//         }
//         return result;
//     }
//     return power;
// }
// var powerValue = base(6);
// console.log(powerValue(6));

// class 12 learn: recursive function
// // "i love you Maya" this sentence print 10 times.
// function loveMessage(n){
//     if(n == 11){
//         return 0;
//     }
//     console.log(n + '. ' + 'I love you Maya');
//     return loveMessage(n + 1);
// }
// loveMessage(1);

// // serial number printout 1 to 50
// function slNo(n){
//     if(n == 51){
//         return 0;
//     }
//     console.log(n);
//     return slNo(n + 1);
// }
// slNo(1);

// // sumation of serial number 1 to 20
// function sum(n){
//     if(n == 6){
//         return 0;
//     }
//     return n + sum(n + 1);
// }
// console.log(sum(1))

// // factorial value determination 
// function fact(i){
//     if(i == 6){
//         return 1;
//     }
//     return i * fact(i + 1);
// }
// console.log(fact(1));

// class 13 learn: currying function
// // simple function 
// function add(x, y, z){
//     return x + y + z;
// }
// console.log(add(49, 56, 71));

// // currying function
// function currying(x){
//     return function (y){
//         return function (z){
//             return x + y + z;
//         }
//     }
// }
// // console.log(currying(45)(43)(12));
// var curryings = currying(21)(24)(34);
// console.log(curryings);

// // class 14 learn: function composition
// function printout(input){
//     console.log(input);
// }
// function multiply(n){
//     return n * 5;
// }
// function addition(x, y){
//     return x + y;
// }
// printout(multiply(addition(2, 8)));