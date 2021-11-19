/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let len = s.length,
        obj = new Set(['a','e','i','o','u','A','E','I','O','U']),
        res = s.split(''),
        left = 0,
        right = len -1
    while(left < right) {
        while(left<len && !obj.has(res[left])) {
            left++
        }
        while(right>0 && !obj.has(s[right])) {
            right--
        }
        if(left<right) {
            const w = res[left]
            res[left] = res[right]
            res[right] = w
            left++
            right--
        }
    }
    return res.join("")
};
// @lc code=end

