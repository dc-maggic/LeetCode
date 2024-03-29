/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, count = 0
    for(var i=nums.length-1; i>=0; i--) {
        if(nums[i]===1) {
            count++
        } else {
            if(count>max) {
                max = count
            }
            count = 0
        }
    }
    return max > count ? max : count
};
// @lc code=end

