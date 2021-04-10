/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 const oldValues={}
    for(let i=0;i<nums.length;i++){
        const NumberNow = nums[i]
        const neededValue = target - NumberNow
        const index2 = oldValues[neededValue]
        if(index2!=null){
            return[index2,i]
        }else{
            oldValues[NumberNow] =i
        }
    }
};