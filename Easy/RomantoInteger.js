/*Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. */

let s = "MMCCCXCIX"
console.log(romanToInt(s))
function romanToInt(s){
    let result = 0;
    for(let i = 0; i < s.length; i++){
        console.log(s[i])
        switch (s[i]){
            case 'I':
                if(s[i+1] == 'V' && i!= s.length-1){
                    result = result + 4
                    i++
                }
                else if(s[i+1] == 'X' && i!= s.length-1){
                    result = result + 9
                    i++
                }else{
                    result = result + 1
                }
                break
            case 'V':
                result = result + 5
                break
            case 'X':
                if(s[i+1] == 'C' && i!= s.length-1){
                    result = result + 90
                    i++
                }
                else if(s[i+1] == 'L' && i!= s.length-1){
                    result = result + 40
                    i++
                }
                else{
                    result = result + 10
                }
                break
            case 'L':
                    result = result + 50
                break
            case 'C':
                if(s[i+1] == 'D' && i!= s.length-1){
                    result = result + 400
                    i++
                }
                else if(s[i+1] == 'M' && i!= s.length-1){
                    result = result + 900
                    i++
                }
                else{
                    result = result + 100
                }
                break
            case 'D':
                    result = result + 500
                break
            case 'M':
                    result = result + 1000
                break
            default:
                console.log("entrei no default")
        }
        console.log(result)
    }
    return result
}