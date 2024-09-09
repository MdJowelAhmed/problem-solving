function largeNumber(arr){
    return Math.max(...arr)
}
// console.log(largeNumber([3,5,7,8,6,4]))

function sumOfArray(arr){
    return arr.reduce((acc,curr)=>acc+curr,0)
}
// console.log(sumOfArray([3,5,76,8,9]))

function isPalindrome(str){
    let reverse=str.split('').reverse().join('')
    return reverse===str
}
// console.log(isPalindrome("tata"))
// console.log(isPalindrome("paap"))

function isPrime(num){
   if(num<=1)return false
   for(let i =2;i<=Math.sqrt(num);i++){
    if(num% i===0){
        return false
    }
    return true
   }
}
// console.log(isPrime(7))
// console.log(isPrime(8))

function secondLargestNumber(arr){
    let largestNum=-Infinity, secondLargestNum=-Infinity;
    for(num of arr){
        if(num>largestNum){
            secondLargestNum=largestNum
            largestNum=num
        }
        else if(num>secondLargestNum && num<largestNum){
            secondLargestNum=num;
        }
       
    }
    return secondLargestNum
}
// console.log(secondLargestNumber([4,6,7,8,9,]))

function removedDuplicate(arr){
    return [...new Set(arr)]
}
// console.log(removedDuplicate([4,5,6,7,5,4,]))

// function countChar(str,char){
//     return str.split(char).length-1
// }

function countChar(str,char){
    return str.split(char).length-1;
}
console.log(countChar('love you my mother and brother also','o'))

function anagram(str1,str2){
    let normalize=str=>str.toLowerCase().split('').sort().join('')
    return normalize(str1)===normalize(str2)
}
// console.log(anagram('listen','silent'))
// console.log(anagram('sabbir','silent'))
// console.log(anagram('talent','lentat'))

function longestWord(str){
    let words=str.split(' ')
    let longest=""
    for(let word of words){
        if(word.length > longest.length){
            longest=word
        }
      
    }
    return longest
}
console.log(longestWord("i love bd"))