// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    
    let numbers = new Set();
    
    for(let num of nums){
        if(!numbers.has(num)){
            numbers.add(num);
        }else{
            return true
        }
    }
    return false;
    
};