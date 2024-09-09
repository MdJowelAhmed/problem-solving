function palindrome(str){
    const reverse=str.split('').reverse().join('')
    return str===reverse
}
console.log(palindrome('madam'))
console.log(palindrome('like'))