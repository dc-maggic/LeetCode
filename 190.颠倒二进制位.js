/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var res = 0,i=0
    while(i<32){
        res = res * 2 + n%2
        if(n!==0) n = ~~(n/2)
        i++
    }
    return res
};
// @lc code=end

