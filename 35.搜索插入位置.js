/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const l = nums.length
    if(nums[0]===target||nums[0]>target) return 0
    for(var i=1; i<l; i++){
        if(nums[i]===target) return i;
        if(nums[i-1]<target&&target <nums[i]) return i;
    }
    return l
};
// @lc code=end

