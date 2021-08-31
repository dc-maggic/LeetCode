/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2) return n
    let ary = [0,1,1], i = 2
    while(i<=n) {
        ary[2] = ary[1] + ary[0]
        ary[0] = ary[1]
        ary[1] = ary[2]
        i++
    }
    return ary[2]
};
// @lc code=end

