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
    while(i<32 && n>0){
        res |= (n & 1) << (31 - i);
        n >>>= 1;
        ++i
    }
    return res >>> 0
};
// @lc code=end

