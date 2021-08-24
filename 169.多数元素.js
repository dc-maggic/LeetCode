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
    let l = nums.length, obj = {}, half = l/2
    for(var i=0; i<l; i++){
        let num = nums[i]
        obj[num] = obj[num] + 1 || 1
        if(obj[num]>half) {
            return num
        }
    }
};
// @lc code=end

