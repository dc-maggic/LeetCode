/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length===0) return 0
    const l = haystack.length, n = needle.length;
    if(n===1){
        for(var i=0; i<l; i++){
            if(haystack[i]===needle[0]) return i
        }
    }else{
        let f = false;
        for(var i=0; i< l-n+1; i++){
            for(var j=0; j<n; j++){
                if(needle[j]!==haystack[i+j]){
                    f = false;
                    break;
                }
                f = true;
            }
            if(f) return i;
        }
    }
    return -1
};
// @lc code=end

