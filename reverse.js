// function strReverse(str){
//     return str.split('').reverse().join('')
// }
// console.log(strReverse("jowel ahmed"))

// function largestNumber(arr){
//     let big=arr[0]
//     for(i=1; i <arr.length;i++){
//         if(arr[i]>big){
//            big= arr[i]
//         }
//     }
//     return big
// }

// console.log(largestNumber([1,4,6,7,5]))

// function panidrom(str){
//     const reverse=str.split('').reverse().join('')
//     return str===reverse
// }

// console.log(panidrom("madam"))
// console.log(panidrom("kaj"))

// function fizzBuzz(){
//     for(i=1; i <= 100; i ++){
//         if(i % 3===0 && i % 5===0 ){
//             console.log("fizzBuzz")
//         }
//         else if (i % 3 === 0){
//             console.log("Fizz")
//         }
//         else if (i % 5 === 0){
//             console.log("Buzz")
//         }
//         else {
//             console.log(i)
//         }
//     }
// }

// fizzBuzz()


// function sumOfArray(arr){
//     let sum=0;
//     for(i=1; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumOfArray([2,4,5,7,6,4]))


// function factorial(num){
//     let number=1;
//     for(i=1; i<=num; i++){
//         number *= i
//     }
//     return number
// }

// console.log(factorial(8))

// const express=require("express")
// const app=express()

// app.get('/',(req,res)=>{
//     res.send("test")
// })

// app.listen(3000,()=>{
//     console.log("server is running")
// })

// function countVowels(str) {
//     const vowels = 'aeiou';
//     return [...str].filter(char => vowels.includes(char.toLowerCase())).length;
// }


// function countVowels(str){
//     const vowels="aeiou"
//     return [...str].filter(char=>vowels.includes(char.toLowerCase())).length
// }
// console.log(countVowels('I Love BanglAdesh my mother.I live in this country')); // 3

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}))

function sortBy(arr){
    return arr.sort((a,b)=> b-a)
}
console.log(sortBy([3,5,8,5,4,3,2]))