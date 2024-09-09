function isPalindrome(str) {
    const reverse = str.split('').reverse().join('')
    return reverse === str
}

console.log(isPalindrome('abir'))

function largestNumber(arr) {
    return Math.min(...arr)
}
console.log(largestNumber([4, 5, 6, 7, 54, 2, 4,]))

function fizzBuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz')
        }
        else if (i % 3 === 0) {
            console.log('fizz')
        }
        else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}
// fizzBuzz()

function factorial(num){
    if(num===0 || num===1){
        return 1
    }
    return num*factorial(num-1)
}
console.log(factorial(5))


function removedDuplicate(arr){
    return [...new Set(arr)]
}
console.log(removedDuplicate([2,2,4,5,4,6,4,7,5,78,89,6,4,]))

function sumOfArray(arr){
    return arr.reduce((acc,curr)=>acc+curr,0)
}
console.log(sumOfArray([3,4,5,32,5]))