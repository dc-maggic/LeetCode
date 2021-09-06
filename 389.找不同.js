/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const obj = {}, l = s.length
    for(var i=0; i<l; i++) {
        const o = s[i]
        obj[o] = obj[o] ? obj[o] + 1 : 1
    }
    for(var i=0; i<l; i++) {
        const o =t[i]
        if(!obj[o]) {
            return o
        } else {
            obj[o] = obj[o] - 1
        }
    }
    return t[l]
};
// @lc code=end

