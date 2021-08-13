/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let oldVal = {}
    while(n!=1 && oldVal!=n){
        if(oldVal[n]){
            break
        }else{
            oldVal[n] = true
        }
        n = String(n).split("").reduce((sum,e)=> sum + e*e,0)
    }
    return n===1 ? true : false
};
// @lc code=end

