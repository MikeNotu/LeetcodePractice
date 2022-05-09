/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const previousValues = {};

    for (let i = 0; i < nums.length; i++) {
        const neededValue = target - nums[i];

        if (previousValues[neededValue] != null) {
            return [previousValues[neededValue], i];
        } else {
            previousValues[nums[i]] = i;
        }
    }
};
