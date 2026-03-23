function solution(nums) {
    let num = nums.length / 2;
    let list = [];
    for (i=0; i < nums.length; i++){
        if (!list.includes(nums[i])){
            list.push(nums[i])
        }
    }
    return list.length > num ? num : list.length
}