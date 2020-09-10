//I already knew how  Binary Search works in Theory but didn't know how to make it properly, so I wanted to be able to do it.
public class Solution {
    public int Search(int[] nums, int target) {
        int L=0;
        int R=nums.Length-1;
        
        while(L<=R){
            int M = L+(R-L)/2;
            if(nums[M]==target){
                return M;
            }else if (nums[M]>target){
                R=M-1;
            }else{
                L=M+1;
            }
        }
        return -1;
    }
}