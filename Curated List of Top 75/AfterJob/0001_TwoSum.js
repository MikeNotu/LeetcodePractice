/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for(let i = 0 ; i < nums.length-1 ; i++){
        
        const Needed = target-nums[i]
        
            for(let j = i+1 ; j < nums.length ; j++){
        
            if(nums[j]===Needed){
                return [i,j]
            }        
    
    }
    }
    
};