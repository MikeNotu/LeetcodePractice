//Pretty similar to C# and Java, except that I needed to use Math.floor
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let L=0;
    let R=nums.length-1;
        while(L<=R){
            let M = L+Math.floor((R-L)/2);
            if(nums[M]==target){
                return M;
            }else if (nums[M]>target){
                R=M-1;
            }else{
                L=M+1;
            }
        }
        return -1;
    
};