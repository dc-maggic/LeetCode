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
    let l = s.length,
        word = '',
        j = 0,
        p2s = {},
        s2p = {}
    for(var i=0; i<l; i++) {
        if(s[i] != ' ') {
            word += s[i]
        } 
        if(s[i]==' ' || i+1===l) {
            const p = pattern[j]
            if(p2s[p] && p2s[p]!==word || s2p[word] && s2p[word]!==p) {
                return false
            }
            p2s[p] = word
            s2p[word] = p
            j++
            word = ''
        }
    }
    return j===pattern.length ? true : false
};
// @lc code=end

