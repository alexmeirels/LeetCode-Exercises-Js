
let s = "dvsspvywert"
console.log(lengthOfLongestSubstring(s))
function lengthOfLongestSubstring(s){
    let highestIndex = 0
    let tam = 0
    let index = 0
    let cont = 0
    let substring = s[0]
    let listIndex = []
    let contVetor = 0
    for(let i = 0; i <= s.length; i++){
        if(substring != s[i] && i == s.length){
            i = -1
            index++
            listIndex[contVetor] = index
        }
        if(substring == s[i] && i != s.length){
            tam = i
        }
        if(substring == s[i] && i != s.length && i == tam){
            tam = i
            i = cont
            cont++
            index = index + i - 1
        }
        
    }
    return highestIndex
}