class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0){
            return 0;
        }
        
        int previous = nums[0];
        int currentIndex = 0;
        
        for(int i = 1; i < nums.length;i++){
            
            if(previous != nums[i]){
                
                currentIndex++;
                nums[currentIndex] = nums[i];
                previous = nums[i];
            }
        }
        return currentIndex +1;
        
    }
}
