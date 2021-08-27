/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let flag = 1
    for(var i=digits.length-1; flag; i--) {
        if(digits[i]===9) {
            digits[i] = 0
            flag = 1
        } else {
            if(i<0) {
                digits.unshift(1)
            } else {
                digits[i] = digits[i] + 1
            }
            flag = 0
        }
    }
    return digits
};
// @lc code=end

