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
    const m = [[1,1], [1,0]],
        res = pow(m, n-1)
    return res[0][0]
};
function pow(m , n) {
    let ret = [[1,0], [0,1]]
    while(n>0) {
        if((n&1)===1) {
            ret = multiply(ret, m)
        }
        n>>=1
        m = multiply(m,m)
    }
    return ret;
}
function multiply(a, b) {
    const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
        }
    }
    return c;
}
// @lc code=end

