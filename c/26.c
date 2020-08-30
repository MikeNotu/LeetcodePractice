int removeDuplicates(int* nums, int numsSize){
    
    if(numsSize == 0){
        return 0;
    }
    
    int previous = nums[0];
    int currentIndex = 0;
    
    for(int i = 1;i<numsSize;i++){
        if(previous !=nums[i]){
            currentIndex++;
            nums[currentIndex] = nums[i];
            previous = nums[i];
        }
    }
    return currentIndex+1;

}