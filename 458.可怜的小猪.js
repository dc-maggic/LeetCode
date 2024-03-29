/*
 * @lc app=leetcode.cn id=458 lang=javascript
 *
 * [458] 可怜的小猪
 */

// @lc code=start
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    var base = Math.floor(minutesToTest / minutesToDie) + 1
    return Math.ceil(Math.log(buckets) / Math.log(base))
};
// @lc code=end

