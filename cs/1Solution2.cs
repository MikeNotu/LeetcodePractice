//I found this solution in the first half of this video: https://www.youtube.com/watch?v=mSLX_hq2tJs
//I didn't know I could declare an array and give it value when using "return", so I learned something new today :)
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        for(int i=0;i<nums.Length;i++){
            for(int j=i+1;j<nums.Length;j++){
                
                if(nums[i]+nums[j]==target){
                    return new int[]{i,j};
                    }
                }
            }
        throw new Exception("No solution here");
    }
}

