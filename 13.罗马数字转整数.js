/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    function rs(v){
        switch(v){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
    l = s.length;
    let sum = 0, left = rs(s[0]);
    for(var i=1; i<l; i++){
        const val = rs(s[i]);
        if(left < val){
            sum = sum - left
        }else{
            sum = sum + left
        }
        left = val;
    }
    sum+=left;
    return sum
};
// @lc code=end

