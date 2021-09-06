/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' '),
        l = words.length,
        p2s = {},
        s2p = {}
    if(l!=pattern.length) return false
    for(var i=0; i<l; i++) {
        const p = pattern[i], w = words[i]
        if(p2s[p] && p2s[p]!==w || s2p[w] && s2p[w]!==p) {
            return false
        }
        p2s[p] = w
        s2p[w] = p
    }
    return true
};
// @lc code=end

