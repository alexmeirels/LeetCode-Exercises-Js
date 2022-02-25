/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not. */

let x = 1

console.log(isPalindrome(x))
// Não achei esse método muito eficiente e não consegui achar outra lógica para números inteiros.
function isPalindrome(x){
    let quotient = x
    let aux1 = 0
    let cont = 0
    let result = 0
    let aux2 = x
    while(quotient >= 1){
        quotient = Math.floor(aux2)
        aux2 = aux2/10
        cont++
    }
    cont = cont - 2
    quotient = x
    aux2 = x
    while(quotient >= 1){
        quotient = Math.floor(aux2)
        aux2 = aux2/10
        aux1 = quotient%10
        result = result + (Math.pow(10, cont) * aux1)
        cont--
    }
    if(result == x){
        return true
    }
    else{
        return false
    }
}
