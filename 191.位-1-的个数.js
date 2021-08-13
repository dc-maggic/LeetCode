/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if(n===0) return 0
    let res=1
    while(n>2){
        if(n%2===1) res++
        n = ~~(n/2)
    }
    return res
};
// @lc code=end

