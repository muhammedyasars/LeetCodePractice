function twoSum(nums: number[], target: number): number[] {
    let i:number;
    let j:number;
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
};