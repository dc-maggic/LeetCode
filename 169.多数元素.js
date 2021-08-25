/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return majorityElementRec(nums, 0, nums.length - 1);
};
function majorityElementRec(nums, start, end) {
    if(start === end) {
        return nums[start]
    }
    let middle = ~~((end - start) / 2) + start,
        left = majorityElementRec(nums, start, middle),
        right = majorityElementRec(nums, middle+1, end)
    if(left=== right) {
        return left
    }
    let leftCount = countInRange(nums, left, start, end),
        rightCount = countInRange(nums, right, start, end);
    return leftCount > rightCount ? left : right
}
function countInRange(nums, num, start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (nums[i] == num) {
            count++;
        }
    }
    return count;
}
// @lc code=end

