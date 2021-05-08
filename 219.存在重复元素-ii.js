/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let m = new Map();
    const l = nums.length;
    for(let i=0; i < l; i++){
        const val = nums[i]
        if(m.has(val)&& i - m.get(val)<=k){
            return true
        }else{
            m.set(val,i)
        }
    }
    return false
};
// @lc code=end

