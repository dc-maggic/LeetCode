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
    let r = Number.parseInt(n/5), i = 25, res = r
    while(res > 1) {
        res = Number.parseInt(n/i)
        i *= 5
        r += res
    }
    return r
};
// @lc code=end

