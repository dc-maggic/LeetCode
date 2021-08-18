/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let l = columnTitle.length, r=0, base = "A".charCodeAt() - 1
    for(var i=0; i<l; i++){
        r = r + 26**i *( columnTitle[l-i-1].charCodeAt() - base )
    }
    return r
};
// @lc code=end

