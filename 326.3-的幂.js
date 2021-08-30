/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(3**20 % n ===0 && n>0) {
        return true
    } else {
        return false
    }
};
// @lc code=end

