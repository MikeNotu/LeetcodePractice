//This was the first solution that came to my head
//but I wanted to learn how to make it run faster
//so after having this answer I looked for tutorials to improve it.
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        
    
        int [] array = new int[2];

        
        for(int i=0;i<nums.Length;i++){
            for(int j=i+1;j<nums.Length;j++){
                
                
                    if(nums[i]+nums[j]==target){
                        array[0]=i;
                        array[1]=j;
                        i=nums.Length+1;
                        j=i;
                    }
                
            }
        }
        return array;
    }
}
