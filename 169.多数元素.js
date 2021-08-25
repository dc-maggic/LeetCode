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
    let candidate = nums[0], count = 1, len = nums.length
    for(var i=1; i<len; i++){
        if(candidate===nums[i]) {
            ++count
        }else if(--count===0) {
            candidate = nums[i]
            count = 1
        }
    }
    return candidate
};
// @lc code=end

