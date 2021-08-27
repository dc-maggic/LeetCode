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
        res = String.fromCharCode(--columnNumber % 26 + 65) + res
        columnNumber = ~~(columnNumber / 26)
    }
    return res
};
// @lc code=end

