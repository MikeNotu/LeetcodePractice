/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    if(nums.length == 0){
        return 0;
    }
    
    var previous = nums[0];
    var currentIndex = 0;
    
    for(var i = 1; i < nums.length;i++){
        
        if(previous != nums[i]){
            
            currentIndex++;
            nums[currentIndex] = nums[i];
            previous = nums[i];
        }
    }
    return currentIndex +1;
    
};