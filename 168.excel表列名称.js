/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = ''
    while(columnNumber > 0) {
        let flag = columnNumber % 26 === 0
        if(flag) {
            res = 'Z' + res
        } else {
            res = String.fromCharCode((columnNumber-1) % 26 + 65) + res
        }
        columnNumber = ~~(columnNumber / 26) - flag
    }
    return res
};
// @lc code=end
