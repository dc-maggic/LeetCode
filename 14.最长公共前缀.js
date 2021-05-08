/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let min = strs[0].length, c="", str="", f = true;
    const l = strs.length;
    for(var j=0; j<min; j++){
        f = true;
        c = strs[0][j];
        for(var i=1; i<l; i++){
            if(strs[i][j]!=c){
                f = false;
                break;
            }
        }
        if(f){
            str = str + c;
        }else{
            break;
        }
    }
    return str;
};
// @lc code=end

