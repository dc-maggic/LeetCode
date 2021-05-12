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
    let left = 0, right = l - 1;
    while(left<=right){
        let m = ((right - left)>>1) + left;
        if(nums[m]>=target){
            right = m - 1;
        }else{
            left = m + 1;
        }
    }
    return left
};
// @lc code=end

