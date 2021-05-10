/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = nums.length;
    if(l===0) return 0
    let c = 0, i = 0;
    while(i<l){
        if(nums[i]!==val){
            nums[c] = nums[i]
            ++c;
        }
        ++i
    }
    return c
};
// @lc code=end

