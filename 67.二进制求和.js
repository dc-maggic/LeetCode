/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, flag = 0, sum = ''
    while(flag>0 || i>=0 || j>=0) {
        let s = Number(a[i--] || 0) + Number(b[j--] || 0) + flag
        switch(s) {
            case 0:
            case 1:
                sum = s + sum
                flag = 0
                break
            case 2:
                sum = "0" + sum
                flag = 1
                break
            case 3:
                sum = "1" + sum
                flag = 1
                break
        }
    }
    return sum
};
// @lc code=end

