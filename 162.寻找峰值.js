/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1
    while(left < right) {
        const m = Math.floor((right-left)/2) + left,
        m1 = nums[m], m2 = nums[m+1]
        if(m1>m2){
            right = m
        } else {
            left = m + 1
        }
    }
    return left
};
// @lc code=end

