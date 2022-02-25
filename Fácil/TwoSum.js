const nums = [-1,-2,-3,-4,-5]
const target = -8
console.log(isTwoSum(nums, target))

function isTwoSum(nums, target){
    for(let i = 0; i < nums.length; i++) {     
            for(let j = i + 1; j < nums.length; j++) {
                if((nums[i]+nums[j]) == target){
                    return [i, j]
                }
            }
    }
    return []
}

