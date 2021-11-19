/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const s = new Set(nums1), r = []
    for(var i=nums2.length-1; i>=0; i--) {
        const item = nums2[i]
        if(s.has(item)) {
            r.push(item)
            s.delete(item)
        }
    }
    return r
};
// @lc code=end

