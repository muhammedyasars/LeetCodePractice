/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[j]+nums[i]==target){
                return [i,j]
            }
        }
    }
};