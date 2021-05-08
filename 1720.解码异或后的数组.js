/*
 * @lc app=leetcode.cn id=1720 lang=javascript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let result = [first];
    const n = encoded.length + 1;
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] ^ encoded[i - 1];
    }
    return result
};
// @lc code=end

