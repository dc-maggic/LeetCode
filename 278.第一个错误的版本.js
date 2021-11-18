/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n===1) return 1
        let i = Math.ceil(n/2), version, last
        while(i<n){
            if(isBadVersion(i)){
                version = i
                if(last){
                    // 有正常版本
                    if(last+1===i){
                        // 上一个是正常版本
                        return i
                    }else {
                        i = Math.ceil( (i-last) / 2) + last
                    }
                }else{
                    if(i===1){
                        return 1
                    }
                    version = i
                    i = Math.ceil(i/2)
                }
            }else {
                last = i
                if(n-i===1) {
                    // 还有最后一个没校验就是最后一个。
                    return n
                } else if(i+1===version){
                    // 下一个版本是坏的就是答案
                    return version
                }else {
                    // 向后寻找
                    i = Math.ceil((n-i)/2) + i
                }
            }
        }
    };
};
// @lc code=end

