/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let r = 0
    while(n > 1) {
        n = Number.parseInt(n/5)
        r += n
    }
    return r
};
// @lc code=end

