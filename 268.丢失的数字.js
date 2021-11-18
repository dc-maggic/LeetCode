/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const l = nums.length
    let sum = l
    for(var i=0; i<l; i++) {
        sum += i;
        sum -= nums[i]
    }
    return sum
};
// @lc code=end

