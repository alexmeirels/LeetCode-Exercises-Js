let nums = [1,3,4,2,2];
findDuplicate(nums)

function findDuplicate(nums){

    for(let i = 0; i < nums.length-1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                console.log(nums[i]);
                return nums[i];
            }
        }
    }
    return false;
}
