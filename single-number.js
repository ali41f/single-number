/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
    nums = nums.sort()
    let single = 0
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] == nums[i + 1] || nums[i] == nums[i - 1])) {
            single = nums[i]
            continue
        }
    }
    return single
};