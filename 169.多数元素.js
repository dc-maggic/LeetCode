/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const l = nums.length
    while(true) {
        let candidate = nums[Math.floor(Math.random() * l)],
            count = 0
        for(var num of nums) {
            if (num == candidate) ++count;
        }
        if (count > l / 2) return candidate;
    }
    return -1
};
// @lc code=end

