/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const obj = {}, len = numbers.length
    for(var i=0; i<len; i++) {
        const other = target - numbers[i]
        if(obj[other]) {
            return [obj[other], i+1]
        }else {
            obj[numbers[i]] = i+1
        }
    }
};
// @lc code=end

