function reverse(str){
    return str.split('').reverse().join('')
}
// console.log(reverse('jowel'))

function largestNumber(arr){
    return Math.max(...arr)
}
// console.log(largestNumber([3,5,6,8,7,6,]))

function factorail(n){
    if(n===0 )return 1;
    return n* factorail(n-1)
}
// console.log(factorail(5))

function largestWord(str){
    let words=str.split(' ')
    let largest=""
    for(let word of words){
        if(word.length>largest.length){
            largest=word
        }
    }
    return largest
}
// console.log(largestWord('my country name is bangladesh'))

