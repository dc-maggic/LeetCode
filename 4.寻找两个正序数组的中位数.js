/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len = nums1.length + nums2.length
    let k = Math.ceil(len/2)
    if(len%2===0) {
        return (findMidNum(nums1,nums2,k) + findMidNum(nums1,nums2,k+1)) / 2
    } else {
        return findMidNum(nums1,nums2,k)
    }
};
function findMidNum(nums1, nums2, k) {
    let num1_os = 0,
        num2_os = 0,
        len1 = nums1.length,
        len2 = nums2.length
    while(true){
        // 边界情况 1越界 2k=1
        if(num2_os >= len2) {
            return nums1[num1_os + k - 1]
        }
        if(num1_os >= len1) {
            return nums2[num2_os + k - 1]
        }
        if(k===1){
            return Math.min(nums1[num1_os], nums2[num2_os])
        }
        
        const index = Math.floor(k/2),
        // num1、num2 越界,可以选取对应数组中的最后一个元素,
        // 必须根据排除数的个数减少 k 的值，
        // 而不能直接将 k 减去 k/2
            num1_i = Math.min(index + num1_os, len1) - 1,
            num2_i = Math.min(index + num2_os, len2) - 1
        if(nums1[num1_i] < nums2[num2_i]) {
            k -= (num1_i - num1_os + 1)
            num1_os = num1_i + 1
        } else {
            k -= (num2_i - num2_os + 1)
            num2_os = num2_i + 1
        }
    }
}
// @lc code=end

