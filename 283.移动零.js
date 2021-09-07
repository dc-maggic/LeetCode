/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l = nums.length
    for(var i=0,j=0; i<l; i++) {
        if(nums[i] !== 0 ) {
            nums[j] = nums[i]
            j++
        }
    }
    while(j<l) {
        nums[j] = 0
        j++
    }
};
// @lc code=end

