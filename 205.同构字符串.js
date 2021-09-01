/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const s2t = {}, t2s = {}, l=s.length
    for(var i=0; i<l; i++) {
        const x=s[i], y=t[i]
        if( s2t[x] && s2t[x]!==y || t2s[y] && t2s[y]!==x) {
            return false
        }
        s2t[x] = y
        t2s[y] = x
    }
    return true
};
// @lc code=end

