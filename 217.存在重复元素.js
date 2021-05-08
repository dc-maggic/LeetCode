/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const len = nums.length;
    let obj = {};
    for(var i=0; i<len; i++){
        if(obj.hasOwnProperty(nums[i])){
            return true;
        }else{
            obj[nums[i]] = 1;
        }
    }
    return false;
};
// @lc code=end

