/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const l = nums.length,res = []
    let target = Infinity
    for(var i=0; i<l; i++) {
        if(nums[i+1]==target+2) {
            target++
        } else if(nums[i]==target+1) {
            target++
            const last = res.length - 1
            res[last] = res[last] + "->" + nums[i]
        }else {
            res.push(String(nums[i]))
            target = nums[i]
        }
    }
    return res
};
// @lc code=end

