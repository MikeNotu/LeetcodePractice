//Used the second part of this video: https://www.youtube.com/watch?v=mSLX_hq2tJs
//I remember using Hashmaps in Java and Dictionaries in Python at the Adaptative Systems Programming course
//But I didn't understand thet well, so it's nice to finally see why they are so usefull
//I also watched this tutorial: https://www.youtube.com/watch?v=bN-2qdBEurA

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int,int>hashTable = new Dictionary<int,int>();

        for(int i=0;i<nums.Length;i++){
            int complement = target - nums[i];
            if(hashTable.ContainsKey(complement)){
                return new int[]{hashTable[complement],i};
            }else
            {
                hashTable[nums[i]]=i;
            }
        }
        
        throw new Exception("No solution here");
    }
}