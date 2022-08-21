/**
 * @Title Problem TwoSum
 * @param [array string]
 * @return array
 */

//  const ararr = [1, 2, 4, 5, 10, 11, 12] // [1, 2]
//  const eee = 16;

// function twoSum(arr, target) {
//     for(var i = 0; i < arr.length; i++){
//         for(var j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] == target){
//                 return [i, j];
//             }
//         }
//     }
// }


// var newSum = twoSum(ararr, eee);
// console.log(newSum);

// function isRun() {
//     for(let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }

// isRun(10)
// const arr = [1, 2, 3, 4, 5]
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// } 

function jsFile(s){
    if(!s.match('.js')) {
        return false;
    }
    return true;
}

let js = 'index.s';
let result = jsFile(js)
console.log(result)